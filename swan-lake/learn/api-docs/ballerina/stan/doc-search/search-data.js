var searchData = {
  "modules": [
    {
      "id": "stan",
      "description": "\u003cp\u003eThis module provides the capability to connect with NATS Streaming server and performs the\nbelow functionalities.\u003c/p\u003e",
      "orgName": "ballerinax",
      "version": "1.0.0"
    }
  ],
  "classes": [],
  "functions": [],
  "records": [
    {
      "id": "ServiceConfigData",
      "description": "\u003cp\u003eThe configurations for the NATS streaming subscription.\u003c/p\u003e",
      "moduleId": "stan",
      "moduleOrgName": "ballerinax",
      "moduleVersion": "1.0.0"
    },
    {
      "id": "Message",
      "description": "\u003cp\u003eRepresents the message, which a NATS server sends to its subscribed services.\u003c/p\u003e",
      "moduleId": "stan",
      "moduleOrgName": "ballerinax",
      "moduleVersion": "1.0.0"
    },
    {
      "id": "StreamingConfig",
      "description": "\u003cp\u003eConfiguration related to establishing a streaming connection.\u003c/p\u003e",
      "moduleId": "stan",
      "moduleOrgName": "ballerinax",
      "moduleVersion": "1.0.0"
    }
  ],
  "constants": [
    {
      "id": "NEW_ONLY",
      "description": "\u003cp\u003eSpecifies that message delivery should start with the messages, which are published after the subscription is created.\u003c/p\u003e",
      "moduleId": "stan",
      "moduleOrgName": "ballerinax",
      "moduleVersion": "1.0.0"
    },
    {
      "id": "LAST_RECEIVED",
      "description": "\u003cp\u003eSpecifies that message delivery should start with the last (most recent) message stored for this subject.\u003c/p\u003e",
      "moduleId": "stan",
      "moduleOrgName": "ballerinax",
      "moduleVersion": "1.0.0"
    },
    {
      "id": "FIRST",
      "description": "\u003cp\u003eSpecifies that message delivery should begin with the oldest available message for this subject.\u003c/p\u003e",
      "moduleId": "stan",
      "moduleOrgName": "ballerinax",
      "moduleVersion": "1.0.0"
    },
    {
      "id": "TIME_DELTA_START",
      "description": "\u003cp\u003eThe key for the \u003ccode\u003eTimeDeltaStart\u003c/code\u003e type.\u003c/p\u003e",
      "moduleId": "stan",
      "moduleOrgName": "ballerinax",
      "moduleVersion": "1.0.0"
    },
    {
      "id": "SEQUENCE_NUMBER",
      "description": "\u003cp\u003eThe key for the \u003ccode\u003eSequenceNumber\u003c/code\u003e type.\u003c/p\u003e",
      "moduleId": "stan",
      "moduleOrgName": "ballerinax",
      "moduleVersion": "1.0.0"
    },
    {
      "id": "DEFAULT_URL",
      "description": "\u003cp\u003eDefault URL for NATS connections.\u003c/p\u003e",
      "moduleId": "stan",
      "moduleOrgName": "ballerinax",
      "moduleVersion": "1.0.0"
    }
  ],
  "errors": [
    {
      "id": "StanError",
      "description": "\u003cp\u003eRepresents the NATS module related errors.\u003c/p\u003e",
      "moduleId": "stan",
      "moduleOrgName": "ballerinax",
      "moduleVersion": "1.0.0"
    }
  ],
  "types": [
    {
      "id": "TimeDeltaStart",
      "description": "\u003cp\u003eSpecifies that message delivery should start with a given historical time delta (from now).\u003c/p\u003e",
      "moduleId": "stan",
      "moduleOrgName": "ballerinax",
      "moduleVersion": "1.0.0"
    },
    {
      "id": "SequenceNumber",
      "description": "\u003cp\u003eSpecifies that message delivery should start at the given sequence number.\u003c/p\u003e",
      "moduleId": "stan",
      "moduleOrgName": "ballerinax",
      "moduleVersion": "1.0.0"
    },
    {
      "id": "StartPosition",
      "description": "\u003cp\u003eSpecifies the position to start receiving messages.\u003c/p\u003e",
      "moduleId": "stan",
      "moduleOrgName": "ballerinax",
      "moduleVersion": "1.0.0"
    },
    {
      "id": "Error",
      "description": "\u003cp\u003eThe union of the NATS module related errors.\u003c/p\u003e",
      "moduleId": "stan",
      "moduleOrgName": "ballerinax",
      "moduleVersion": "1.0.0"
    }
  ],
  "clients": [
    {
      "id": "Caller",
      "description": "\u003cp\u003eRepresents the NATS caller.\u003c/p\u003e",
      "moduleId": "stan",
      "moduleOrgName": "ballerinax",
      "moduleVersion": "1.0.0"
    },
    {
      "id": "Client",
      "description": "\u003cp\u003eThe streaming client provides the capability to publish messages to the NATS streaming server.\u003c/p\u003e",
      "moduleId": "stan",
      "moduleOrgName": "ballerinax",
      "moduleVersion": "1.0.0"
    }
  ],
  "listeners": [
    {
      "id": "Listener",
      "description": "\u003cp\u003eRepresents the NATS streaming server connection to which a subscription service should be bound in order to\nreceive messages of the corresponding subscription.\u003c/p\u003e",
      "moduleId": "stan",
      "moduleOrgName": "ballerinax",
      "moduleVersion": "1.0.0"
    }
  ],
  "annotations": [
    {
      "id": "ServiceConfig",
      "description": "\u003cp\u003eThe annotation, which is used to configure the streaming subscription.\u003c/p\u003e",
      "moduleId": "stan",
      "moduleOrgName": "ballerinax",
      "moduleVersion": "1.0.0"
    }
  ],
  "abstractObjects": [
    {
      "id": "Service",
      "description": "\u003cp\u003eThe STAN service type\u003c/p\u003e\n",
      "moduleId": "stan",
      "moduleOrgName": "ballerinax",
      "moduleVersion": "1.0.0"
    }
  ]
};