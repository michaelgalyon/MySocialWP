import { SPHttpClient } from '@microsoft/sp-http';

export interface IMySocialWpProps {
  spHttpClient: SPHttpClient;
  domElement: HTMLElement;
}
