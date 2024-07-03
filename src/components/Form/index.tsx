import Input from './Input';
import TextArea from './TextArea';

function Form() {
  return (
    <div className="contact-content">
      <h3 className="contact-title">Escreva-me sua proposta/projetos</h3>

      <form className="contact-form">
        <Input
          labelText="Nome"
          type="text"
          name="name"
          id="name"
          placeholder="Digite seu nome"
        />

        <Input
          labelText="E-mail"
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu email"
        />

        <TextArea
          labelText="Propostas/Projetos"
          name="project"
          id="project"
          placeholder="Escreva sua proposta ou seu projeto"
        />
      </form>
    </div>
  );
}

export default Form;
