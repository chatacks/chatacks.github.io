import { useParams, Link } from "react-router-dom";
import { getSortedPosts } from "@/data/posts";
import { formatDate } from "@/lib/utils";
import { DATA } from "@/data/resume";
import { mdxComponents } from "@/mdx-components";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, type ComponentType } from "react";
import type { MDXProps } from "mdx/types";
import { useLang } from "@/hooks/useLang";

type MDXComponent = ComponentType<MDXProps>;
type PostModule = () => Promise<{ default: MDXComponent }>;

// MDX lazy imports — each post is loaded on demand
const postModules = import.meta.glob("../../content/*.mdx", {
  eager: false,
}) as Record<string, PostModule>;

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useLang();
  const locale = lang === "pt-BR" ? "pt-BR" : "en-US";
  const sortedPosts = getSortedPosts(lang);
  const currentIndex = sortedPosts.findIndex((p) => p.slug === slug);
  const post = currentIndex >= 0 ? sortedPosts[currentIndex] : null;
  const previousPost =
    currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < sortedPosts.length - 1
      ? sortedPosts[currentIndex + 1]
      : null;

  useEffect(() => {
    if (post) {
      document.title = post.title;
    }
  }, [post]);

  if (!post || !slug) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-muted-foreground">{t("blogPost.notFound")}</p>
      </div>
    );
  }

  const jsonLdContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    description: post.summary,
    image: post.image
      ? post.image
      : `${DATA.url}/blog/${slug}/opengraph-image`,
    url: `${DATA.url}/blog/${slug}`,
    author: {
      "@type": "Person",
      name: DATA.name,
    },
  }).replace(/</g, "\\u003c");

  const loadModule = postModules[`../../content/${slug}.mdx`];

  return (
    <section id="blog">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: jsonLdContent,
        }}
      />
      <div className="flex justify-start gap-4 items-center">
        <Link
          to="/blog"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-2 py-1 inline-flex items-center gap-1 mb-6 group"
          aria-label={t("blogPost.backToBlog")}
        >
          <ChevronLeft className="size-3 group-hover:-translate-x-px transition-transform" />
          {t("blogPost.backToBlog")}
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="title font-semibold text-3xl md:text-4xl tracking-tighter leading-tight">
          {post.title}
        </h1>
        <p className="text-sm text-muted-foreground">
          {formatDate(post.publishedAt, locale)}
        </p>
      </div>
      <div className="my-6 flex w-full items-center">
        <div
          className="flex-1 h-px bg-border"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          }}
        />
      </div>
      <article className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
        {loadModule ? (
          <LazyMDXContent loadModule={loadModule} />
        ) : (
          <p className="text-muted-foreground">
            {t("blogPost.contentUnavailable").replace("{slug}", slug)}
          </p>
        )}
      </article>

      <nav className="mt-12 pt-8 max-w-2xl">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          {previousPost ? (
            <Link
              to={`/blog/${previousPost.slug}`}
              className="group flex-1 flex flex-col gap-1 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
            >
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <ChevronLeft className="size-3" />
                {t("blogPost.previous")}
              </span>
              <span className="text-sm font-medium group-hover:text-foreground transition-colors whitespace-normal wrap-break-word">
                {previousPost.title}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block flex-1" />
          )}

          {nextPost ? (
            <Link
              to={`/blog/${nextPost.slug}`}
              className="group flex-1 flex flex-col gap-1 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors text-right"
            >
              <span className="flex items-center justify-end gap-1 text-xs text-muted-foreground">
                {t("blogPost.next")}
                <ChevronRight className="size-3" />
              </span>
              <span className="text-sm font-medium group-hover:text-foreground transition-colors whitespace-normal wrap-break-word">
                {nextPost.title}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block flex-1" />
          )}
        </div>
      </nav>
    </section>
  );
}

function LazyMDXContent({ loadModule }: { loadModule: PostModule }) {
  const [Content, setContent] = useState<MDXComponent | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { t } = useLang();

  useEffect(() => {
    let cancelled = false;
    loadModule()
      .then((mod) => {
        if (!cancelled) setContent(() => mod.default);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      });
    return () => {
      cancelled = true;
    };
  }, [loadModule]);

  if (error) return <p className="text-destructive">{t("blogPost.failedToLoad")}</p>;
  if (!Content) return <p className="text-muted-foreground">{t("blogPost.loading")}</p>;

  return <Content components={mdxComponents} />;
}
