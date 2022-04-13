<a href='https://www.meteor.com'><img src='https://user-images.githubusercontent.com/841294/26841702-0902bbee-4af3-11e7-9805-0618da66a246.png' height='60' alt='Meteor'></a>


# Vaiu it is an application built with [Meteor](https://www.meteor.com/) , [React](https://es.reactjs.org/) and [Bootstrap](https://www.meteor.com/). With a [Mongo](https://www.mongodb.com/) Database. 

## Quick Start

* Visit the official [install page](https://www.meteor.com/developers/install) to learn more.

* Once meteor is installed, we are going to modify the file environment_example.json and we rename it to environment.json

* For twilio remember to have the variables: TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NOMBER

* For gmail as email message provider remember the variables: service (Gmail), user (example@gmail.com) and password(super Duper Password)

## Start

```bash
meteor --settings environment.json
```

open [http://localhost:3000/](http://localhost:3000/)

#### Go to Register
<img src="demo/register.png" width="512"/>

#### After registering, you will receive an email or a text message with the corresponding username and password.
<img src="demo/login.png" width="512"/>

#### Now we can create our first transaction
<img src="demo/form_transactions.png" width="512"/>

#### And we can list them from the dashboard
<img src="demo/dashboard.png" width="512"/>

