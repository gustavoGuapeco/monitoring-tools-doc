import { Injectable } from '@angular/core';

export interface ToolData {
  name: string;
  description: string;
  useCases: string;
  example: string;
  links: {
    name: string;
    link: string;
  }[];

}

@Injectable({ providedIn: 'root' })
export class ToolDataService {
  getTools(): ToolData[] {
    return [
      {
        name: 'GitHub Actions',
        description: `GitHub Actions é a plataforma de automação de pipelines do GitHub, usada no Guapeco principalmente para CI/CD do backend (Spring Boot + Kotlin). Ela executa workflows automatizados com base em eventos como push ou pull request, garantindo que o código passe por etapas de validação, build, e deploy de forma contínua e segura.`,
        useCases: `Automação do pipeline de build e deploy do backend Kotlin; execução de testes; empacotamento Docker e envio para Amazon ECR; integração com EC2 para disponibilizar novas versões da API.`,
        example: `A cada merge na branch principal do backend, o GitHub Actions empacota a aplicação como uma imagem Docker, envia ao ECR, e faz o deploy na instância EC2 — tudo isso sem intervenção manual.`,
        links: [{ name: "Documentação", link: 'https://docs.github.com/en/actions' }]
      },
      {
        name: 'AWS Amplify',
        description: `O AWS Amplify é a plataforma de hospedagem e deploy contínuo do frontend Angular do Guapeco. Ele está conectado diretamente ao repositório GitHub e realiza o deploy automático sempre que há merge na branch 'developer'.`,
        useCases: `Hospedagem de aplicação Angular, provisionamento automático de ambiente para revisão de pull requests, build em ambiente isolado, e rollback automático em caso de falha.`,
        example: `Após o merge de um PR, o Amplify detecta a alteração, executa o build da aplicação Angular com base nos ambientes definidos (environment.ts) e publica a nova versão automaticamente, garantindo alta disponibilidade com mínima intervenção.`,
        links: [
          { name: "Documentação", link: 'https://docs.amplify.aws/' },
          { name: "Meu passo a passo", link: 'https://docs.google.com/document/d/1jtGrRcGzhkEXVMsY-HSM_q29sQIBOmm8UiU8f9CmKdA/edit?usp=sharing' }
        ]
      }
    ];
  }

}  