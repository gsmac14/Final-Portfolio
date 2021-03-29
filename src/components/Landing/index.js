import React from 'react'
import { Segment, Image, Divider, Grid, Header } from 'semantic-ui-react'
import css from "../../assest/images/css.png";
import selfie from "../../assest/images/selfie.png";
import html from "../../assest/images/html.png";
import mongo from "../../assest/images/mongo.png";
import js from "../../assest/images/js.png";
import react from "../../assest/images/react.png";
import mysql from "../../assest/images/mysql.png";
import jquery from "../../assest/images/jquery.png";
import api from "../../assest/images/api.png";



//Used semantic ui please look up documentation


const Landing = () => (
  <Segment size="huge" inverted color= "grey" tertiary floated="left" compact tertiary>
    <Divider horizontal></Divider>
    <Divider horizontal></Divider>
    
    <Image src={selfie} size='medium' circular floated="left"/> 
 
  
  

    <Grid columns= "4" divided centered>
      <Grid.Row>
<Header>Full Stack Developer</Header>

      </Grid.Row>
    <Image.Group size='tiny'>
      <Grid.Row>
        <Grid.Column>
      <Image src={css} />
        </Grid.Column>
      <Grid.Column>
      <Image src={html} />
      </Grid.Column>
      <Grid.Column>
      <Image src={mongo} />
        </Grid.Column> 
        <Grid.Column>
      <Image src={js} />
          </Grid.Column> 
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
      <Image src={react} />
        </Grid.Column>
        <Grid.Column>
      <Image src={mysql} />
        </Grid.Column>
      <Grid.Column>
      <Image src={jquery} />
      </Grid.Column>
      <Grid.Column>
      <Image src={api} />
      </Grid.Column>
      </Grid.Row>
    </Image.Group>
    </Grid>







    

  </Segment>
);

export default Landing
