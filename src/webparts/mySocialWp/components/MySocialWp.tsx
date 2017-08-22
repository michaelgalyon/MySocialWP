import * as React from 'react';
import styles from './MySocialWp.module.scss';
import { IMySocialWpProps } from './IMySocialWpProps';
import { escape } from '@microsoft/sp-lodash-subset';

import FeaturedPost from './FeaturedPost/FeaturedPost';
import RecentDocuments from './RecentDocuments/RecentDocuments';
import SocialCollaborations from './SocialCollaborations/SocialCollaborations';
import SocialGroups from './SocialGroups/SocialGroups';
import SocialTopics from './SocialTopics/SocialTopics';
import TeamCollaborations from './TeamCollaborations/TeamCollaborations';

import {
  Button,
  Grid,
  Column,
  Row,
  Image,
  Label,
  Icon
} from 'semantic-react';

export default class MySocialWp extends React.Component<IMySocialWpProps, void> {
  public render(): React.ReactElement<IMySocialWpProps> {
    return (
      <div className={styles.mySocialWp}>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"></link>
        <Grid stackable>
          {/* <Column className="SocialTiles" width={8}  > */}

          {/* <Row className="YammerRow" columns={2} equal > */}
          <Column className="SocialTopics" width={4}  >
            <SocialTopics domElement={this.props.domElement}
                  spHttpClient={this.props.spHttpClient} />
          </Column>
          <Column className="SocialGroups" width={4} >
            <SocialGroups domElement={this.props.domElement}
                  spHttpClient={this.props.spHttpClient} />
          </Column>
          {/* </Row>
          <Row className="CollabRow" columns={2} equal> */}
          <Column className="FeaturedPost" width={8} floated={'right'} >
            <FeaturedPost domElement={this.props.domElement}
                  spHttpClient={this.props.spHttpClient} />
          </Column>  
          <Column className="Delve" width={4} floated={'left'} >
            <SocialCollaborations domElement={this.props.domElement}
                  spHttpClient={this.props.spHttpClient} />
          </Column>
          <Column className="Teams" width={4} floated={'left'} >
            <TeamCollaborations domElement={this.props.domElement}
                  spHttpClient={this.props.spHttpClient} />
          </Column>
          {/* </Row> */}
          {/* </Column>  */}

          <Column className="Recent Documents" width={16}  >
            <RecentDocuments domElement={this.props.domElement}
                  spHttpClient={this.props.spHttpClient} />
          </Column>
        </Grid>
      </div>
    );
  }
}
