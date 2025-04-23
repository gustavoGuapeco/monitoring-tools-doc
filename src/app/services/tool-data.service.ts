import { Injectable } from '@angular/core';

export interface ToolData {
  name: string;
  description: string;
  useCases: string;
  example: string;
  link: string;
}

@Injectable({ providedIn: 'root' })
export class ToolDataService {
  getTools(): ToolData[] {
    return [
      {
        name: 'Google Tag Manager (GTM)',
        description: 'Ferramenta de gerenciamento de tags que permite implantar e atualizar scripts sem alterar o código da aplicação.',
        useCases: 'Centraliza o controle de ferramentas de rastreamento como Sentry, Clarity e Google Analytics.',
        example: 'Permite configurar eventos de clique, rolagem, e scripts externos sem novo deploy.',
        link: 'https://tagmanager.google.com/'
      },
      {
        name: 'Sentry',
        description: 'Plataforma de monitoramento de erros em tempo real.',
        useCases: 'Captura exceções, fornece stack trace, contexto e integração com sistemas de issues.',
        example: 'Configurado via GTM para capturar erros sem necessidade de alterar o frontend diretamente.',
        link: 'https://sentry.io/'
      },
      {
        name: 'Microsoft Clarity',
        description: 'Ferramenta de análise comportamental gratuita que ajuda a entender como os usuários interagem com a interface.',
        useCases: 'Heatmaps, gravação de sessões, cliques raiva, e métricas de engajamento.',
        example: 'Instalado via GTM, permite analisar como usuários navegam e onde clicam.',
        link: 'https://clarity.microsoft.com/'
      },
      {
        name: 'Google Analytics',
        description: 'Plataforma de análise de tráfego e comportamento do usuário no site.',
        useCases: 'Rastreamento de visitas, fontes de tráfego, conversões e segmentações de público.',
        example: 'Com GTM é possível configurar eventos personalizados e metas sem alterar o código.',
        link: 'https://analytics.google.com/'
      }
    ];
  }
}