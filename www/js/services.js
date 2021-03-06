angular.module('starter.services', [])

.factory('Tasks', function() {
  // Some fake testing data
  var tasks = [
    {
      nome: "Diga a um familiar querido o quanto o ama.",
      name: "Tell a loved one how much you love him.",
      done: false
    },
    {
      nome: "Elogie algum amigo próximo que tenha feito algo legal por você.",
      name: "Praise someone who has done something cool for you.",
      done: false
    },
    {
      nome: "Seja grato a todas as pessoas hoje.",
      name: "Be grateful to all people today.",
      done: false
    },
    {
      nome: "Dê bom dia a todas as pessoas que esbarrar pela rua.",
      name: "Wish a good day to everybody that you see today.",
      done: false
    },
    {
      nome: "Compre algo para alguma pessoa necessitada comer.",
      name: "Buy something for some beggar/poor eating.",
      done: false
    },
    {
      nome: "Fale com algum amigo seu sobre este aplicativo.",
      name: "Talk to a friend of yours about this app.",
      done: false
    },
    {
      nome: "Peça desculpas para alguém, mesmo que a pessoa tenha sido a culpada.",
      name: "Apologize to someone, even if the person has been the one to blame.",
      done: false
    },
    {
      nome: "Doe suas roupas velhas para quem precisa.",
      name: "Donate some of your old clothes to those who need them.",
      done: false
    },
    {
      nome: "Fale com 5 pessoas sobre o Baleia Vermelha! Talvez essa pessoa também precisa espalhar coisas boas por aí.",
      name: "Talk to 5 people about the Red Whale! Maybe that person also needs to spread good things out there.",
      done: false
    },
    {
      nome: "Pergunte às pessoas que vivem junto a você e a seus vizinhos como eles estão.",
      name: "Ask the people who lives with you and your neighbors how they're feeling today.",
      done: false
    },
    {
      nome: "Compre um chocolate para alguém que você goste.",
      name: "Buy a chocolate to someone you care about.",
      done: false
    },
    {
      nome: "Seja grato por mais um dia de vida.",
      name: "Be grateful for another day of life.",
      done: false
    },
    {
      nome: "Sorria para o caixa ou o vendedor que encontrar.",
      name: "Smile at a cashier or salesperson.",
      done: false
    },
    {
      nome: "Deixa alguém passar na sua frente na fila.",
      name: "Let someone pass in front of you by a wait line.",
      done: false
    },
    {
      nome: "Convide um amigo para tomar sorvete e diga que vai pagar para ele. Talvez ele esteja precisando conversar, mas esteja no aperto.",
      name: "Invite a friend to have ice cream and tell him you're going to pay for it. Maybe he needs to talk, but is in the grip.",
      done: false
    },
    {
      nome: "Seja gentil com todas as pessoas que encontrar.",
      name: "Be kind to all people you meet.",
      done: false
    },
    {
      nome: "Seja paciente com todos. Procure não elevar sua voz e trate a todos com carinho.",
      name: "Be patient with everyone. Try not to raise your voice and treat everyone with affection.",
      done: false
    },
    {
      nome: "Use a roupa mais bonita que você tem hoje.",
      name: "Wear the most beautiful clothes you have today.",
      done: false
    },
    {
      nome: "Quando o transporte público estiver lotado, ofereça seu assento para uma pessoa.",
      name: "When public transportation is full, offer your seat to one person.",
      done: false
    },
    {
      nome: "Envie uma mensagem para alguém dizendo o quanto a presença dela é importante na sua vida.",
      name: "Send a message to someone telling them how important their presence is in your life.",
      done: false
    },
    {
      nome: "Ajude algum animal de rua, nem que seja dando um petisco para ele. Pets também necessitam de amor.",
      name: "Help an abandoned animal, even giving it a snack. Pets also need love.",
      done: false
    },
    {
      nome: "Dê uma garrafa de água reutilizável cheia de água a um mendigo.",
      name: "Give a beggar a bottle of water.",
      done: false
    },
    {
      nome: "Se olhe no espelho quando acordar e diga para você mesmo, o quanto és corajoso, bondoso e amado.",
      name: "Look in the mirror when you wake up and say to yourself how brave, kind and loving you are.",
      done: false
    },
    {
      nome: "Se estiver apenas pensando coisas legais sobre uma pessoa, envie uma mensagem para contar. Elogios são sempre necessários e bem vindos.",
      name: "If you are just thinking nice things about a person, send a message to tell him about. Praise is always needed and welcome.",
      done: false
    },    {
      nome: "Tire 15 minutos para observar a natureza. Tudo isso foi feito para você.",
      name: "Take 15 minutes to observe nature. All this was done for you.",
      done: false
    },    {
      nome: "Diga \"Eu te amo\" para alguém que você ama muito.",
      name: "Say \"I love you \" to someone you love very much.",
      done: false
    },
    {
      nome: "Conte uma piada/história engraçada para um amigo que adora conversar contigo.",
      name: "Tell a funny joke/story to a friend who loves to talk to you.",
      done: false
    },
    {
      nome: "Fale com mais 5 pessoas sobre o Baleia Vermelha! Talvez essa pessoa também precisa espalhar coisas boas por aí.",
      name: "Talk to 5 more people about the Red Whale! Maybe that person also needs to spread good things out there.",
      done: false
    },
    {
      nome: "Agradeça sempre pela família que possui, mesmo com todos os problemas que ela tenha. Ter problemas é normal.",
      name: "Always thanks for the family you have, even with all the problems they have. Having problems is normal.",
      done: false
    },
    {
      nome: "Pegue um lixo da rua que não é seu e jogue no lixo.",
      name: "Take garbage from the street that is not yours and throw it in the trash.",
      done: false
    },
    {
      nome: "Repita 3x para você mesmo que ainda que o dia seja difícil, você dará o melhor de você.",
      name: "Repeat 3x for yourself that even if the day is difficult, you will do your best.",
      done: false
    },
    {
      nome: "Escreva num papel algo que você deseja muito e guarde.",
      name: "Write on a piece of paper something you want very much and keep.",
      done: false
    },
    {
      nome: "Passe um dia inteiro sem falar coisas negativas.",
      name: "Spend a whole day without speaking negative things.",
      done: false
    },
    {
      nome: "Ligue para seus avós e dê um pouco de atenção a eles.",
      name: "Call your grandparents and give them a little attention.",
      done: false
    },
    {
      nome: "Pergunte a alguém se ele está se sentido bem e se precisa de alguma coisa.",
      name: "Ask someone if they are feeling good and need something.",
      done: false
    },
    {
      nome: "Dê atenção as pessoas que precisarem de sua atenção hoje.",
      name: "Pay attention to the people who need your attention today.",
      done: false
    },
    {
      nome: "Pegue algum bem material que você gosta muito e agradeça por ter ele.",
      name: "Think about a good possession you like a lot and thank for having it.",
      done: false
    },
    {
      nome: "Puxe conversa com um desconhecido e conte algo bom sobre a sua vida.",
      name: "Starts a conversation with a stranger and tell something good about your life.",
      done: false
    },
    {
      nome: "Mande mensagem nas redes sociais para alguém que você gosta muito.",
      name: "Send messages on social networks to someone you care about.",
      done: false
    },
    {
      nome: "Faça carinho em alguém.",
      name: "Caress someone.",
      done: false
    },
    {
      nome: "Crie uma playlist de músicas que te deixam animado.",
      name: "Create a playlist of songs that make you happy.",
      done: false
    },
    {
      nome: "Poste uma foto com as pessoas que você mais gosta nas redes sociais.",
      name: "Post a photo with the people you love the most on social networks.",
      done: false
    },
    {
      nome: "Tente lembrar de algo muito bom que aconteceu recentemente. Se você não lembrar, tente fazer algo bom agora.",
      name: "Try to remember something very good that happened recently. If you do not remember, try to do something good now.",
      done: false
    },
    {
      nome: "Puxe assunto com algum amigo seu que você não fala há muito tempo e agradeça pela amizade dele mesmo há tanto tempo sem conversar.",
      name: "Pull a subject with some friend of yours that you have not spoken in a long time and thanks him for his friendship even being so long without contact.",
      done: false
    },
    {
      nome: "Vá até o espelho e se elogie por 1 minuto nesse instante.",
      name: "Go to the mirror and praise yourself for 1 minute right now.",
      done: false
    },
    {
      nome: "Ajude alguém no meio da rua com alguma coisa que ela precisa.",
      name: "Help someone in the middle of the street with something she needs.",
      done: false
    },
    {
      nome: "Quando alguém disser/fizer algo que te deixe magoado, faça uma lista com 10 qualidades dessa pessoa.",
      name: "When someone says/does something that hurts you, make a list of 10 qualities of that person.",
      done: false
    },
    {
      nome: "Compre um sorvete para alguém desconhecido ou alguém que você sempre quis conversar.",
      name: "Buy an ice cream for someone you do not know or someone you've always wanted to talk to.",
      done: false
    },
    {
      nome: "Sabe aquele livro que você mais gostou de ler? Deixe ele no banco da praça mais próxima de sua casa com uma dedicatória.",
      name: "Do you know the one you like to read the most? Leave him on the bench in the square closest to your house with a dedication.",
      done: false
    },
    {
      nome: "Passar em uma rede de lanchonetes e comprar a promoção do dia para alguém que necessita? Sim! Hoje é essa a sua missão.",
      name: "Go through a network of coffee shops and buy the day's promotion for someone who needs it? Yes! Today is your mission.",
      done: false
    },
    {
      nome: "Hoje é a festa do \"Dia Ruim\" Convide seu melhor amigo e conversem sobre as coisas que não estão dando certo. Dividir nossas dores ajuda a superá-las.",
      name: "Today is the \"Bad Day\" party. Invite your best friend and talk about things that are not working. Dividing our pain helps to overcome them.",
      done: false
    },
    {
      nome: "Vá ao cinema assistir ao último lançamento dos cinemas.",
      name: "Go to the cinema to watch the latest release of theaters.",
      done: false
    },
    {
      nome: "Escreva uma carta para o seu vizinho falando sobre suas.",
      name: "Write a letter to your neighbor talking about yours.",
      done: false
    }
  ];

  return tasks;
});
