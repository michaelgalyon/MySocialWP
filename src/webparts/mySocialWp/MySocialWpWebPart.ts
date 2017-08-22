import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'mySocialWpStrings';
import MySocialWp from './components/MySocialWp';
import { IMySocialWpProps } from './components/IMySocialWpProps';
import { IMySocialWpWebPartProps } from './IMySocialWpWebPartProps';

export default class MySocialWpWebPart extends BaseClientSideWebPart<IMySocialWpWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IMySocialWpProps > = React.createElement(
      MySocialWp,
      {
        domElement: this.domElement,
        spHttpClient: this.context.spHttpClient,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
