// const Prisma = require("@prisma/client");
import { PrismaClient } from "@prisma/client";
// var moment = require("moment");
import moment from "moment";

const prisma = new PrismaClient();

const postData = [
  {
    name: "Assault on the Sky",
    content:
      '<div class="se-component se-image-container __se__float-left" contenteditable="false"><figure style="margin: auto;"><img src="http://localhost:3000/assaultonthesky.jpg" alt="assaultonthesky.jpg" data-rotate="0" data-proportion="true" data-size="," data-align="left" data-index="0" data-file-name="assaultonthesky.jpg" data-file-size="0" origin-size="320,211" data-origin=","></figure></div><p>Assault on the Sky é um jogo retrô em pixel art inspirado nos clássicos que faziam tanto sucesso nos celulares antigos, como o saudoso Space Impact dos Nokia S60.</p><p>Aqui você navegará por um universo dominado por insetos alieníginas, morcegos flamejantes e outros monstros que te levarão há um nível de desafio jamais visto.</p><p>Não se destraia, o jogo é extremamente desafiador e tomará algumas horas sua cado queira as três medalhas em cada nível!</p><p><br></p><p style="text-align: center;"><a href="https://play.google.com/store/apps/details?id=com.Emdev.Assault&amp;fbclid=IwAR1j5LPiLfc3VV7Vhqd2I1BHnZ7Tbeqyjofb-cRJ_nZ8Bo_jxEjnHWV6wFg" target="_blank"><span style="font-size: 18px;">PlayStore</span></a></p><p style="text-align: center;"><span style="font-size: 18px;">​</span><span style="font-size: 18px;"><a href="https://www.facebook.com/diego.peres.7127/" target="_blank">Criador</a></span><br></p><div class="se-component se-video-container __se__float-center" contenteditable="false" style="width: 50%; min-width: 100%;"><figure style="width: 50%; height: 56.25%; padding-bottom: 28.13%; margin: auto;"><iframe frameborder="0" allowfullscreen="" src="https://www.youtube.com/embed/L8Np81NtN5w" data-proportion="true" data-align="center" data-percentage="50%,56.25%" data-size="50%,56.25%" data-index="0" data-file-name="L8Np81NtN5w" data-file-size="0" data-origin="50%,56.25%" style="width: 100%; height: 100%;"></iframe></figure></div><p><br></p>',
    category: "Nave",
    slug: "assault-on-the-sky",
    scheduled: false,
    schedule: moment().format("DD/MM/YYYY HH:mm:ss"),
    slide: true,
    middle: false,
    gameplay: false,
    public: false,
    midSection: false,
    thumb: "assaultonthesky.jpg",
  },
  {
    name: "Flepuja",
    content:
      '<div class="se-component se-image-container __se__float-left" contenteditable="false"><figure style="margin: auto;"><img src="http://localhost:3000/flepuja.jpg" alt="flepuja.jpg" data-rotate="0" data-proportion="true" data-size="," data-align="left" data-index="0" data-file-name="flepuja.jpg" data-file-size="0" origin-size="320,211" data-origin=","></figure></div><p>Os ovos de um papai coruja foram raptados por morcegos e ele foi salva-los em um labirinto de espinhos!<br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p style="text-align: center;"><a href="https://play.google.com/store/apps/details?id=blodknit.games.flepuja&amp;fbclid=IwAR0zzHsxgqbY2EoF2AeHQ2uN1PFqAvP6VLU9zCUvFaHmVipFmeQEtaI0G2s" target="_blank"><span style="font-size: 18px;">PlayStore</span></a></p><p style="text-align: center;"><span style="font-size: 18px;"><a href="https://www.facebook.com/walderluizcolodettifonseca.luiz/" target="_blank">Criador</a></span></p><div class="se-component se-video-container __se__float-center" contenteditable="false" style="width: 50%; min-width: 100%;"><figure style="width: 50%; height: 56.25%; padding-bottom: 28.13%; margin: auto;"><iframe frameborder="0" allowfullscreen="" src="https://www.youtube.com/embed/waYIbsb1QpI" data-proportion="true" data-align="center" data-percentage="50%,56.25%" data-size="50%,56.25%" data-index="0" data-file-name="waYIbsb1QpI" data-file-size="0" data-origin="50%,56.25%" style="width: 100%; height: 100%;"></iframe></figure></div><p><br></p><p><br></p><p><br></p><p><br></p>',
    category: "Plataforma",
    slug: "flepuja",
    scheduled: false,
    schedule: moment().format("DD/MM/YYYY HH:mm:ss"),
    slide: true,
    middle: false,
    gameplay: false,
    public: false,
    midSection: false,
    thumb: "flepuja.jpg",
  },
  {
    name: "Selenes´s Nightmare",
    content:
      '<div class="se-component se-image-container __se__float-left" contenteditable="false"><figure style="margin: auto;"><img src="http://localhost:3000/selenenightmare.jpg" alt="selenenightmare.jpg" data-rotate="0" data-proportion="true" data-size="," data-align="left" data-index="0" data-file-name="selenenightmare.jpg" data-file-size="0" data-origin=","></figure></div><p>Selene está presa em um pesadelo e terá que enfrentar seus piores medos, percorrendo todo o caminho para conseguir acordar.<br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p style="text-align: center;"><a href="http://Selene is trapped in a Nightmare and will have to face her worst fears by going all the way to be able to wake up" target="_blank"><span style="font-size: 18px;">GameJolt</span></a></p><p style="text-align: center;"><span style="font-size: 18px;"><a href="https://www.facebook.com/daniel.henriques.9693/" target="_blank">Facebook</a></span></p><div class="se-component se-video-container __se__float-center" contenteditable="false" style="width: 50%; min-width: 100%;"><figure style="width: 50%; height: 56.25%; padding-bottom: 28.13%; margin: auto;"><iframe frameborder="0" allowfullscreen="" src="https://www.youtube.com/embed/n1w8HyFGBTs" data-proportion="true" data-percentage="50%,56.25%" data-size="50%,56.25%" data-align="center" data-index="0" data-file-name="n1w8HyFGBTs" data-file-size="0" data-origin="100%,56.25%" style="width: 100%; height: 100%;"></iframe></figure></div><p><br></p>',
    category: "Ação",
    slug: "selenes-s-nightmare",
    scheduled: false,
    schedule: moment().format("DD/MM/YYYY HH:mm:ss"),
    slide: true,
    middle: false,
    gameplay: false,
    public: false,
    midSection: false,
    thumb: "selenenightmare.jpg",
  },
  {
    name: "Street Hunter",
    content:
      '<div class="se-component se-image-container __se__float-left" contenteditable="false"><figure style="margin: auto;"><img src="http://localhost:3000/streethunter.jpg" alt="streethunter.jpg" data-rotate="0" data-proportion="true" data-size="," data-align="left" data-index="0" data-file-name="streethunter.jpg" data-file-size="0" data-origin=","></figure></div><p>&nbsp;Zuga Games, aproveitando esse período de quarentena que estamos vivendo, resolveu por a mão na massa e desenvolver o jogo Street Hunter. Inpirado no momento que passamos, o jogo se passa em um universo paralelo onde os vírus possuem um tamanho bem maior, e estão vagando livremente pelas cidades do mundo. O objetivo do nosso herói é acabar com todos eles. Munido de sua arma de álcool gel, ele precisará ser ágil para não sucumbir a essa terrível invasão.<br></p><p><br></p><p><br></p><p style="text-align: center;">​<br></p><p style="text-align: center;"><a href="http://zugagames.com/" target="_blank">Site</a></p><p style="text-align: center;"><a href="mailto:contact@zugagames.com" target="_blank">E-mail</a></p><p style="text-align: center;"><a href="https://play.google.com/store/apps/details?id=com.zugagames.streethunter" target="_blank">Play Store</a></p><p style="text-align: center;"><a href="https://zuga-games.itch.io/streethunter" target="_blank">Doação</a></p><div class="se-component se-video-container __se__float-center" contenteditable="false" style="min-width: 100%; width: 50%;"><figure style="height: 56.25%; padding-bottom: 28.13%; margin: auto; width: 50%;"><iframe frameborder="0" allowfullscreen="" src="https://www.youtube.com/embed/R8vO8MZLr_s" data-proportion="true" data-align="center" data-percentage="50,56.25%" data-size="50%,56.25%" data-index="0" data-file-name="R8vO8MZLr_s" data-file-size="0" data-origin="100%,56.25%" style="width: 100%; height: 100%;" data-rotate="" data-rotatex="" data-rotatey=""></iframe></figure></div><p><br></p> ',
    category: "Ação",
    slug: "street-hunter",
    scheduled: false,
    schedule: moment().format("DD/MM/YYYY HH:mm:ss"),
    slide: true,
    middle: false,
    gameplay: false,
    public: false,
    midSection: false,
    thumb: "streethunter.jpg",
  },
  {
    name: "Valentina - The Princess Archer",
    content:
      '<div class="se-component se-image-container __se__float-left" contenteditable="false"><figure style="margin: auto;"><img src="http://localhost:3000/valentina.jpg" alt="valentina.jpg" data-rotate="0" data-proportion="true" data-size="," data-align="left" data-index="0" data-file-name="valentina.jpg" data-file-size="0" data-origin=","></figure></div><p>Valentina é uma pequena princesa de um prospero reino conhecido como GrellFrorest, a garota sempre sonhou em servir o exercito do Reino, pois a garota tinha um talento nato para arcos.</p><p><br></p><p>No entanto seu pai, o grande rei, já teria traçado o seu destino, pois ao completar 15 anos, teria que se casar com um príncipe do reino mais frio de todo o continente, o Reino de Frozen.</p><p><br></p><p>Valentina para fugir de seu triste destino, resolve fugir para uma pequena e pacata vila de seu reino e ali vive como uma pequena caçadora e faz dois grandes amigos, João e Maria</p><p><br></p><p>O primeiro é João, filho de um criador de porcos, que sonha em um dia ser um grande Cavaleiro para conquistar o coração de Maria.</p><p><br></p><p>Maria, filha de um ajudante do grande arquiteto do Reino, inteligente, dócil e apaixonada por livros, ela é a única da vila que sabe a verdade sobre a Valentina.</p><p><br></p><p>em um certo dia Maria chega com uma triste notícia a Valentina, o castelo teria sido atacado pelo terrível Império das Trevas e levado o Rei e a Rainha, apesar de ter fugido do castelo, Valentina não pensa duas vezes em ir atrás de seus pais, então os três embarcam nessa grande aventura.</p><p><br></p><p>Mas e você também não deseja se aventurar pelos quatros reinos?</p><p><br></p><p style="text-align: center;"><a href="https://play.google.com/store/apps/details?id=com.Luamar.Valentina&amp;hl=pt_BR&amp;fbclid=IwAR1X31KhvFWrLrT7VBT7jldwJbhQltyDB0Ko-mjIGMquy3vV0s301kY8-yA" target="_blank"><span style="font-size: 18px;">Play Store</span></a></p><p style="text-align: center;"><span style="font-size: 18px;"><a href="mailto:contato.luamargames@gmail.com" target="_blank">E-mail</a></span></p><div class="se-component se-video-container __se__float-center" contenteditable="false" style="width: 50%; min-width: 100%;"><figure style="height: 56.25%; padding-bottom: 28.13%; margin: auto; width: 50%;"><iframe frameborder="0" allowfullscreen="" src="https://www.youtube.com/embed/aFQegAmqaus" data-proportion="true" data-percentage="50,56.25%" data-size="50%,56.25%" data-align="center" data-index="0" data-file-name="aFQegAmqaus" data-file-size="0" data-origin="100%,56.25%" style="width: 100%; height: 100%;" data-rotate="" data-rotatex="" data-rotatey=""></iframe></figure></div><p><br></p>',
    category: "plataforma",
    slug: "valentina",
    scheduled: false,
    schedule: moment().format("DD/MM/YYYY HH:mm:ss"),
    slide: true,
    middle: false,
    gameplay: false,
    public: false,
    midSection: false,
    thumb: "valentina.jpg",
  },
  {
    name: "Damn Endless Orcs",
    content:
      '<div class="se-component se-image-container __se__float-left" contenteditable="false"><figure style="margin: auto;"><img src="http://localhost:3000/dammendlessorcs.jpg" alt="dammendlessorcs.jpg" data-rotate="0" data-proportion="true" data-size="," data-align="left" data-index="0" data-file-name="dammendlessorcs.jpg" data-file-size="0" origin-size="320,211" data-origin=",">            </figure></div><p>A Llama Game Studio está no desenvolvimento do jogo Damm Endless Orcs e aos poucos está trazendo isso a realidade, com a colaboração através do crowndfunding eles apostam as fichas nesta proposta.</p><p>Com princípios de RPG, o jogador poderá subir até o nível máximo, comprar novos itens, melhorar seus atributos, atingir o primeiro lugar no ranking global dando uma lição a milhares de orcs.</p><p>Dam Endeless Orcs se passa em um mundo medieval onde os heróis humanos batalham contra uma orda interminável de orcs. Você e até mais 3 amigos devem sobreviver.</p><p><br></p><p style="text-align: center;"><a href="https://www.catarse.me/damn_endless_orcs?ref=project_link&amp;fbclid=IwAR0e15We9x-ch4_UsvnWhxf2NxZQg3bGNK6vzTyS8503H5U8nXZM6lbWJUk" target="_blank"><span style="font-size: 18px;">Crowndfunding</span></a></p><p style="text-align: center;"><span style="font-size: 18px;"><a href="https://store.steampowered.com/app/1332040/Damn_Endless_Orcs/?fbclid=IwAR3myxPX2aDdw0ZRvx75hvfutLw7RLV0e4Z12rIF-H2lsAEGX3LK6OB7YEE" target="_blank">Steam</a></span></p><div class="se-component se-video-container __se__float-center" contenteditable="false" style="min-width: 100%; width: 50%;"><figure style="height: 56.25%; padding-bottom: 28.13%; margin: auto; width: 50%;"><iframe frameborder="0" allowfullscreen="" src="https://www.youtube.com/embed/sjpEDzOQ588" data-proportion="true" data-percentage="50,56.25%" data-size="50%,56.25%" data-align="center" data-index="0" data-file-name="sjpEDzOQ588" data-file-size="0" data-origin="100%,56.25%" style="width: 100%; height: 100%;" data-rotate="" data-rotatex="" data-rotatey=""></iframe></figure></div><p><br></p>',
    category: "Plataforma",
    slug: "damn-endless-orcs",
    scheduled: false,
    schedule: moment().format("DD/MM/YYYY HH:mm:ss"),
    slide: false,
    middle: true,
    gameplay: false,
    public: false,
    midSection: false,
    thumb: "dammendlessorcs.jpg",
  },
  {
    name: "RGB-Sudoku",
    content:
      '<div class="se-component se-image-container __se__float-left" contenteditable="false"><figure style="margin: auto;"><img src="http://localhost:3000/rgb-sudoku.jpg" alt="rgb-sudoku.jpg" data-rotate="0" data-proportion="true" data-size="," data-align="left" data-index="0" data-file-name="rgb-sudoku.jpg" data-file-size="0" origin-size="320,211" data-origin=","></figure></div><p>A OvenBird Studio tem orgulho de anunciar o lançamento oficial do nosso game RGB Sudoku no site MPGames e Kongregate. O jogo nasceu de um sonho, literalmente. Foi uma ideia que tive enquanto dormia. Acordei pensando: que tal um Sudoku que ao invés de números fosse feito de cores?</p><p>O objetivo do jogador é descobrir quais cores devem preencher cada bloco do tabuleiro com base nas dicas dos blocos das extremidades, da mesma forma que deve descobrir qual número deve preencher as casas em um sudoku numérico padrão.</p><p>Nosso objetivo principal foi criar uma interface clean, intuitiva, bonita e agradável. Apostamos na ideia de que os seres humanos utilizam as cores naturalmente no dia-a-dia, então seria um excelente meio de transmitir ideias e quantidades.</p><p>Contudo, no desenvolvimento, percebemos que muitos jogadores nao se familiarizaram com a experiência, então ouvimos a comunidade e incluímos dicas visuais e numéricas para facilitar a jogatina.</p><p>Em breve lançaremos versão para Android com mais recursos, modos de jogo e achievements. Serão uma versão Free e uma paga a R$4,99, com alguns extras e sem propagandas.</p><p>Nosso estúdio está localizado em Guarapuava, uma cidade no centro-oeste do Paraná.</p><p>Estamos ansiosos para ver a reação dos jogadores sobre nosso game. Também estamos ansiosos para ouvir a comunidade de perto. Nosso estúdio preza por satisfazer as demandas e encantar os players acima de tudo, então se quiserem falar conosco, deixar um elogio, crítica ou sugestão, estaremos extremamente felizes em ouvi-los.</p><p>Estamos também desenvolvendo outro jogo, dessa vez para Android somente, chamado "E Morreu". O jogo conta com traduções para Inglês, Francês, Espanhol, Português e Alemão</p><p><br></p><p style="text-align: center;"><a href="https://mpgames.online/play/rgb-sudoku-11257.html" target="_blank"><span style="font-size: 18px;">Site</span></a><span style="font-size: 18px;"><br></span><a href="https://www.kongregate.com/games/OvenBirdStudio/rgb-sudoku" target="_blank"><span style="font-size: 18px;">Jogo Online</span></a><span style="font-size: 18px;"><br></span><a href="mailto:ovenbirdgames@gmail.com" target="_blank"><span style="font-size: 18px;">E-mail&nbsp;</span></a><span style="font-size: 18px;"><br></span><span style="font-size: 18px;"><a href="https://www.facebook.com/OvenBirdGames/" target="_blank">Facebook</a></span><span style="font-size: 18px;"></span><br></p><p style="text-align: center;"><br></p><p style="text-align: center;"><br></p><p><br></p>',
    category: "Casual",
    slug: "rgb-sudoku",
    scheduled: true,
    schedule: moment().format("DD/MM/YYYY HH:mm:ss"),
    slide: false,
    middle: true,
    gameplay: false,
    public: false,
    midSection: false,
    thumb: "rgb-sudoku.jpg",
  },
  {
    name: "Deep Therapy",
    content:
      '[spacer height="20px"] Links:[spacer height="20px"] <a href="https://store.steampowered.com/app/1556430/Deep_Therapy/" target="_blank" rel="noopener">Steam</a> &nbsp; <p style="text-align: center;"><iframe src="https://www.youtube.com/embed/rkgtxibCzL0" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>',
    category: "Aventura",
    slug: "deep-therapy",
    scheduled: false,
    schedule: moment().format("DD/MM/YYYY HH:mm:ss"),
    slide: false,
    middle: false,
    gameplay: true,
    public: false,
    midSection: false,
    thumb: "depptherapy.jpg",
  },
  {
    name: "ShapeNeon Chaos",
    content:
      '<img class="alignleft size-full wp-image-1461" src="http://jogosindie.com.br/wp-content/uploads/2021/02/ShapeNeonChaos.jpg" alt="" width="320" height="210" />ShapeNeon Chaos é um jogo estilo arcade "old-school" de tiro espacial. Você é uma nave enfrentando ondas de inimigos mortais.Este jogo foi feito para lhe dar uma injeção de adrenalina em alguns minutos. Muitas balas e neon em um shooter psicodélico de arcade!- Baseado em arcades old-school- Enfrente diversos inimigos em uma batalha espacial com dificuldade crescente- Lute pela maior pontuação- Gerencia suas vidas restantes para chegar mais longe- Use suas bombas com sabedoria- Sobreviva ao Chaos alucinante !- Tiros e efeitos com Neon e Luzes insanos !- Conquistas- Steam Leaderboards- Suporte a Gamepads e Big Picture- 4 modos de jogo: "Standard", "Chaos", "Time Attack" e "Slow Motion"------------- STANDARD MODE ---------------------Este é o modo padrão de jogo. Inicie com 3 vidas e 3 bombas. Tente bater a pontuação máxima.------------- CHAOS MODE ---------------------Este é o modo "Chaos". Muitos inimigos em uma louca luta pela sobrevivência.------------- TIME ATTACK ---------------------Este é o modo "Time Attack". Inicie com apenas 1 vida e 1 bomba. Tente sobreviver o máximo de tempo que você puder.------------- SLOW MOTION ---------------------É como o modo Standard, mas você não tem bombas, você tem Slow Motion !--- ATENÇÃO ----Este jogo contém luzes e imagens que piscam rapidamentePode causar desconforto e desencadear convulsões em pessoas com epilepsia fotossensível[spacer height="20px"]<strong>Links:</strong><p style="text-align: center;"><a href="https://store.steampowered.com/app/1513110/ShapeNeon_Chaos/?fbclid=IwAR04ZKFlmnHNwtpjte-rHW19ir6FrRD4Yxw7s931AadxmyRSInW2gDluQL8" target="_blank" rel="noopener">Steam</a></p>[spacer height="20px"]<p style="text-align: center;"><iframe src="https://www.youtube.com/embed/kcQ2TnO_NgQ" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>',
    category: "nave",
    slug: "shapeneon-chaos",
    scheduled: false,
    schedule: moment().format("DD/MM/YYYY HH:mm:ss"),
    slide: false,
    middle: false,
    gameplay: true,
    public: false,
    midSection: false,
    thumb: "shapeNeonChaos.jpg",
  },
  {
    name: "Dragão Crescente",
    content:
      '<img class="alignleft size-full wp-image-1436" src="http://jogosindie.com.br/wp-content/uploads/2020/10/120881832_337441327342804_7221348886459313475_n.png" alt="" width="300" height="300" /><div class="fontsize-base">Dragão Crescente é um jogo indie de plataforma estilo Classicvania/Megaman que eu to trabalhando faz 2 anos. Algoz e Bighat são dois guerreiros quebrados ( também tem o Cucur ), eles explorarão terras hostis através daquilo que pode consertá-los !Se gostar, dê uma olhada ai e financie!</div><p class="fontsize-base fontweight-semibold">Orçamento:</p>Todo o dinheiro fornecido para o projeto será utilizado exclusivamente para a produção do jogo, então se o projeto te despertou curiosidade, não esqueça de apoiar ou até mesmo compartilhar[spacer height="20px"]<strong>Link:</strong><p style="text-align: center;"><a href="https://www.catarse.me/dragaocrescente?ref=project_link&amp;fbclid=IwAR2yAJ9vJxjp0og0hGXDo5J61EKgwRsF4s3pCym0eewztezI13yE2cBpG8s" target="_blank" rel="noopener noreferrer">CrowndFunding</a></p>[spacer height="20px"]<p style="text-align: center;"><iframe src="https://www.youtube.com/embed/s-t6acqDuV4" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>',
    category: "plataforma",
    slug: "dragao-nascente",
    scheduled: false,
    schedule: moment().format("DD/MM/YYYY HH:mm:ss"),
    slide: false,
    middle: false,
    gameplay: true,
    public: false,
    midSection: false,
    thumb: "dragaonascente.jpg",
  },
  {
    name: "Dojoran",
    content:
      '<img class="alignleft size-full wp-image-1421" src="http://jogosindie.com.br/wp-content/uploads/2020/09/dojoranimagensdestacadas.jpg" alt="" width="320" height="211" />A vida não é tão fácil e simples como parecia na sua infância. Para sobreviver em um mundo lotado de perigos, você precisa passar pelo difícil treinamento ninja dos sapos usando técnicas secretas criadas pelos seus antepassados.Dojoran é um jogo de plataforma de precisão no qual você precisa utilizar maçãs para realizar um salto duplo de diferentes formas do habitual. Seu nível de jogabilidade é mediano, sendo um ótimo candidato para iniciantes no gênero, mas concedendo uma boa diversão aos veteranos.[spacer height="20px"]<p style="text-align: center;"><a href="https://store.steampowered.com/app/1389120/Dojoran/?fbclid=IwAR02qIGEhXjYLzWh5R4K2r5bweey2ZwXXTWWCojUtenrGcXfAo0DK0o5KLE" target="_blank" rel="noopener noreferrer">Steam</a></p><p style="text-align: center;"><a href="http://mayhamurasaki.com/" target="_blank" rel="noopener noreferrer">Site</a></p><p style="text-align: center;"><a href="https://twitter.com/nautlander" target="_blank" rel="noopener noreferrer">Twitter</a></p>[spacer height="20px"]<p style="text-align: center;"><iframe src="https://www.youtube.com/embed/Ymb239TbsGo" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>',
    category: "plataforma",
    slug: "dojoran",
    scheduled: false,
    schedule: moment().format("DD/MM/YYYY HH:mm:ss"),
    slide: false,
    middle: false,
    gameplay: true,
    public: false,
    midSection: false,
    thumb: "dojoran.jpg",
  },
  {
    name: "Índio das Sombras",
    content:
      '<img class="alignleft size-full wp-image-1427" src="http://jogosindie.com.br/wp-content/uploads/2020/09/indiodassombrasimagensdestacadas.jpg" alt="" width="320" height="211" />Após o descobrimento da América, os portugueses planejam uma invasão de grande escala contra os nativos. Impeça-os de dominar seu território lutando bravamente e resgatando seus aliados já capturados.[spacer height="20px"]&nbsp;<strong>Link:</strong><p style="text-align: center;"><a href="https://play.google.com/store/apps/details?id=com.UniversidadeFranciscana.IndiodasSombras" target="_blank" rel="noopener noreferrer">Play Store</a></p>[spacer height="20px"]<p style="text-align: center;"><iframe src="https://www.youtube.com/embed/UZcMOM5wZBU" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>&nbsp;',
    category: "Aventura",
    slug: "indio-das-sombras",
    scheduled: false,
    schedule: moment().format("DD/MM/YYYY HH:mm:ss"),
    slide: false,
    middle: false,
    gameplay: true,
    public: false,
    midSection: false,
    thumb: "indiodassombras.jpg",
  },
  {
    name: "Rock'n Cow",
    content:
      '<img class="alignleft size-full wp-image-1414" src="http://jogosindie.com.br/wp-content/uploads/2020/09/rockncowimagensdestacadas.jpg" alt="" width="320" height="211" />Em meio a um Apocalipse zumbi, um vaqueiro e sua esposa cientista lutam com o que tem para defender seu lar. Seja inteligente e gerencia seus recursos para sobreviver. Basta uma decisão errada e tudo será destruído pelos Zumbis. Escolha sabiamente uma arma dentre várias como metralhadoras, shotguns e até mesmo uma galinha e uma lançadora de ovos! Mas cuidado! Os zumbis são atraídos pelo barulho. Se você se descuidar, não conseguirá conter o que está por vir. Rock n Cow é um jogo de sobrevivência em um cenário apocalíptico com músicas baseadas no Rock.<strong>Links:</strong><p style="text-align: center;"><a href="https://store.steampowered.com/app/1387980/Rockn_Cow/" target="_blank" rel="noopener noreferrer">Steam</a></p><p style="text-align: center;"><a href="https://www.instagram.com/mj_mac_games/" target="_blank" rel="noopener noreferrer">Instagram</a></p>[spacer height="20px"]<p style="text-align: center;"><iframe src="https://www.youtube.com/embed/zZz9126iprw" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>',
    category: "RPG",
    slug: "rock-n-cow",
    scheduled: false,
    schedule: moment().format("DD/MM/YYYY HH:mm:ss"),
    slide: false,
    middle: false,
    gameplay: false,
    public: false,
    midSection: true,
    thumb: "rockncow.jpg",
  },
  {
    name: "Don't Hit The Baby",
    content:
      '<div class="W4P4ne "><div class="PHBdkd" data-content-height="144"><div class="DWPxHb"><div><img class="alignleft size-full wp-image-1405" src="http://jogosindie.com.br/wp-content/uploads/2020/09/donthitthebabyimagens-destacadas.jpg" alt="" width="320" height="211" />Um jogo casual onde o objetivo é eliminar o máximo de monstros que você conseguir antes do relógio acabar, e claro, NÃO ACERTAR O BEBÊ!!O jogo se passa em um cemitério habitado por 5 diferentes criaturas, sendo elas:Esqueletos, Zumbis, Múmias, Bruxos e o Frankzombie. Quando eliminadas, você recebe pontuação de acordo com o seu tipo.Existe também uma sexta criatura que é chamada de Espantalho. Ao ser eliminada, o tempo do relógio é aumentado em 12 segundos. Então aproveite quando essa criatura aparecer, pois ela deixará o seu jogo mais longo!Será que você consegue nos ajudar a eliminar esses monstros e ser o herói que estávamos esperando!?</div><div>[spacer height="20px"]</div></div><div class="n1EcZc"><div class="U26fgb O0WRkf oG5Srb C0oVfc n9lfJ" tabindex="0" role="button" aria-label="Recolher" aria-disabled="false"><div class="Vwe4Vb MbhUzd"></div><div class="ZFr60d CeoRYc"></div><strong><span class="CwaK9"><span class="RveJvd snByac">Links:</span></span></strong></div><div tabindex="0" role="button" aria-label="Recolher" aria-disabled="false">[spacer height="20px"]</div><div style="text-align: center;" tabindex="0" role="button" aria-label="Recolher" aria-disabled="false"><a href="https://play.google.com/store/apps/details?id=com.VGDR.DontHitTheBaby&amp;fbclid=IwAR1gZ8jUiAHRoT9kCvPE9cOXtIS0eFNvwtvzbV8vE-HKhccFL3ipIp49fQ4" target="_blank" rel="noopener noreferrer">Google Play</a></div><div style="text-align: center;" tabindex="0" role="button" aria-label="Recolher" aria-disabled="false"><a href="mailto:vinicius.delrio41@gmail.com" target="_blank" rel="noopener noreferrer">Email desenvolvedor</a></div><div tabindex="0" role="button" aria-label="Recolher" aria-disabled="false">[spacer height="20px"]</div><div style="text-align: center;" tabindex="0" role="button" aria-label="Recolher" aria-disabled="false"><iframe src="https://www.youtube.com/embed/ZNjKrhCegw4" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div><div tabindex="0" role="button" aria-label="Recolher" aria-disabled="false"></div></div></div></div>',
    category: "Casual",
    slug: "dont-hit-the-baby",
    scheduled: false,
    schedule: moment().format("DD/MM/YYYY HH:mm:ss"),
    slide: false,
    middle: false,
    gameplay: false,
    public: false,
    midSection: true,
    thumb: "donthitthebaby.jpg",
  },
  {
    name: "Space Jumper",
    content:
      '<img class="alignleft size-full wp-image-1458" src="http://jogosindie.com.br/wp-content/uploads/2021/02/spacejumper.jpg" alt="" width="322" height="207" />Space Jumper, jogo desenvolvido no brasil no ano de 2020. Space Jumper tem como objetivo despertar a capacidade dos jogadores, com um mapa infinito e com diversos background, obstáculos e aumento de velocidade.&nbsp;[spacer height="20px"]&nbsp;<strong>Links:</strong>[spacer height="20px"]<p style="text-align: center;"><a href="https://play.google.com/store/apps/details?id=com.lothusgames.spacejumper&amp;fbclid=IwAR2FQVWk9bl96G9m-rOziUt8jBlmLdMEf4oIJE6qyVsJTGt_rKC9SYIOf10" target="_blank" rel="noopener noreferrer">Play Store</a></p>[spacer height="20px"]<p style="text-align: center;"><iframe src="https://www.youtube.com/embed/MqT7qHzTQeo" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>',
    category: "casual",
    slug: "space-jumper",
    scheduled: false,
    schedule: moment().format("DD/MM/YYYY HH:mm:ss"),
    slide: false,
    middle: false,
    gameplay: false,
    public: false,
    midSection: true,
    thumb: "spacejumper.jpg",
  },
  {
    name: "Old West Savior",
    content:
      '<img class="alignleft size-full wp-image-1388" src="http://jogosindie.com.br/wp-content/uploads/2020/07/theoldwestsaviorimagemdestacada.jpg" alt="" width="320" height="211" />Neste jogo você joga como xerife em um belo mundo de pixel art, salva a cidade e todo o velho oeste dos bandidos e se torna The Old West Saviour![spacer height="20px"]<strong>Links:</strong><p style="text-align: center;"><a href="https://store.steampowered.com/app/1298100/The_Old_West_Savior/?fbclid=IwAR3P9VpCBNRMyq3icuXH9dvYBqQhdc7azUSSwBIre8KB9WO2MmFFZOMENq4" target="_blank" rel="noopener noreferrer">Steam</a></p><p style="text-align: center;"><a href="https://www.facebook.com/rafaelferreirammartins/" target="_blank" rel="noopener noreferrer">Desenvolvedor</a></p>[spacer height="20px"]<p style="text-align: center;"><iframe src="https://www.youtube.com/embed/uHiTcoEexoo" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>',
    category: "Plataforma",
    slug: "old-west-savior",
    scheduled: false,
    schedule: moment().format("DD/MM/YYYY HH:mm:ss"),
    slide: false,
    middle: false,
    gameplay: false,
    public: false,
    midSection: true,
    thumb: "theoldwestsavior.jpg",
  },
  {
    name: "Rocket Patrol",
    content:
      '<img class="alignleft size-full wp-image-1372" src="http://jogosindie.com.br/wp-content/uploads/2020/06/rocketpatrolimagensdestacadas.jpg" alt="" width="320" height="211" />Terroristas estão invadindo, prepare a equipe do Rocketpatrol para eliminar esta ameaça. Recolha os armamentos para aperfeiçoar suas armas, armaduras e capacetes. Fique atento às estrelas que chamam reforços e às bases de armamentos e kit médicos, mas cuidado com os terroristas com suas armas e objetos voadores ameaçadores. Muitos generais de guerra e seus soldados e naves estão chegando para subjugar a nação, você tem que impedir!!![spacer height="20px"]<p style="text-align: left;"><strong>Links:</strong></p><div class="o9v6fnle cxmmr5t8 oygrvhab hcukyx3x c1et5uql"><div dir="auto" style="text-align: center;"><a href="https://imperiarte.com.br/games/rocketpatrol" target="_blank" rel="noopener noreferrer">Site oficial</a></div><div dir="auto" style="text-align: center;"></div></div><div class="o9v6fnle cxmmr5t8 oygrvhab hcukyx3x c1et5uql" style="text-align: center;"><div dir="auto"><a href="https://imperiarte.itch.io/rocketpatrol" target="_blank" rel="noopener noreferrer">Compre Rocketpatrol</a></div><div dir="auto"></div></div><div class="o9v6fnle cxmmr5t8 oygrvhab hcukyx3x c1et5uql"><div dir="auto" style="text-align: center;"><a href="https://www.imperiarte.com.br" target="_blank" rel="noopener noreferrer">Imperiarte Multimídia</a></div><div dir="auto">[spacer height="20px"]</div><div dir="auto" style="text-align: center;"><iframe src="https://www.youtube.com/embed/5r6ytvXQ9jk" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div></div>',
    category: "Mave",
    slug: "rocket patrol",
    scheduled: false,
    schedule: moment().format("DD/MM/YYYY HH:mm:ss"),
    slide: false,
    middle: false,
    gameplay: false,
    public: false,
    midSection: true,
    thumb: "rocketpatrol.jpg",
  },
  {
    name: "Thug Race",
    content:
      '<img class="alignleft size-full wp-image-1357" src="http://jogosindie.com.br/wp-content/uploads/2020/06/thugraceimagensdestacadas.jpg" alt="" width="320" height="211" />É hora de se preparar para uma emocionante perseguição de carro. Neste jogo, você deve vencer a polícia provocando o choque entre 2 carros, que fará você ganhar diamantes! Tente alcançar pontos mais altos que seus amigos. Use combos para obter pontuações mais altas mantendo-se perto da polícia (mas não tão perto).A Fuga da Policia também oferece carros diferentes em formas e cores![spacer height="20px"]Característica da corrida de bandidos:- Fácil de jogar e se tornar um grande piloto.- Fuja enquanto se diverte!- A Thug Race tem muitos carros únicos diferentes que você pode trocar.Como jogar um jogo de corrida:No jogo de corrida, você só precisa pressionar a direita ou a esquerda para virar. Mantenha-se longe de ser atingido pela polícia, mas perto o suficiente para conseguir os combos. Lembre-se de manter também os diamantes :)<strong>Links:</strong><p style="text-align: center;"><a href="https://play.google.com/store/apps/details?id=com.NTS.thugrace" target="_blank" rel="noopener noreferrer">Google Play</a></p><p style="text-align: center;">Email: <a href="mailto:drdpedroso@gmail.com" target="_blank" rel="noopener noreferrer">Eduardo Pedroso</a></p><p style="text-align: center;"><a href="https://apps.apple.com/us/app/thug-race/id1515196967?l=pt&amp;ls=1" target="_blank" rel="noopener noreferrer">App Store</a>[spacer height="20px"]</p><p style="text-align: center;"><iframe src="https://www.youtube.com/embed/tqwWqhgNNQQ" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>',
    category: "Casual",
    slug: "thug-race",
    scheduled: false,
    schedule: moment().format("DD/MM/YYYY HH:mm:ss"),
    slide: false,
    middle: false,
    gameplay: false,
    public: false,
    midSection: true,
    thumb: "thugrace.jpg",
  },
  {
    name: "Alizan",
    content:
      '<div class="kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql"><div dir="auto"><img class="alignleft size-full wp-image-1333" src="http://jogosindie.com.br/wp-content/uploads/2020/05/alizanimagemdestacada.jpg" alt="" width="320" height="211" /></div></div><div class="o9v6fnle cxmmr5t8 oygrvhab hcukyx3x c1et5uql"><div dir="auto">Em Alizan, criado por: Luca Lizana, o guerreiro Zalin acorda em um vilarejo desconhecido sem saber o que está acontecendo. Prestes a começar sua aventura, se depara com um problema...</div></div><div class="o9v6fnle cxmmr5t8 oygrvhab hcukyx3x c1et5uql"><div dir="auto">"Mas qual?", você pergunta?</div></div><div class="o9v6fnle cxmmr5t8 oygrvhab hcukyx3x c1et5uql"><div dir="auto">Descubra... em 2 minutos.</div><div dir="auto" style="text-align: center;">Data de lançamento: 09/04/2020</div><div dir="auto">[spacer height="20px"]</div></div><div dir="auto"><strong>Links:</strong></div><div dir="auto"></div><div class="o9v6fnle cxmmr5t8 oygrvhab hcukyx3x c1et5uql"><div dir="auto" style="text-align: center;"><a href="https://lucalizana.itch.io/alizan" target="_blank" rel="noopener noreferrer">Download</a></div></div><div class="o9v6fnle cxmmr5t8 oygrvhab hcukyx3x c1et5uql"><div dir="auto" style="text-align: center;"><a href="https://www.facebook.com/AlizanGame/" target="_blank" rel="noopener noreferrer">Contato </a></div><div dir="auto">[spacer height="20px"]</div><div dir="auto" style="text-align: center;"><iframe src="https://www.youtube.com/embed/AvD--oP5Hgg" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div></div>',
    category: "RPG",
    slug: "alizan",
    scheduled: false,
    schedule: moment().format("DD/MM/YYYY HH:mm:ss"),
    slide: false,
    middle: false,
    gameplay: false,
    public: false,
    midSection: true,
    thumb: "alizan.jpg",
  },
  {
    name: "Shump Arena",
    content: "Nave",
    category:
      '<img class="alignleft size-full wp-image-1274" src="http://jogosindie.com.br/wp-content/uploads/2020/04/shmuparenalogo.jpg" alt="" width="320" height="211" />Shmup Arena é um arena shooter rápido e frenético, onde você precisa sobreviver a diversas ondas deinimigos e alguns chefes poderosos. Não queremos te aborrecer com longas histórias sobre porque você precisa destruir centenas de inimigos, apenas queremosque se divirta explodindo tudo o que vê pela frente.GameplaySeu objetivo é controlar sua nave sobreviver a 8 diferentes arenas e destrua o máximo de inimigos que puder.A nave possui 3 tipos de ataques.Ataque automático: Apenas mire e detone os inimigosAtaque de perto: Elimina a maioria dos inimigos próximos e limpas qualquer tiro inimigoAtaque Especial: Explosão de tiros2 níveis de dificuldades (Normal e Difícil)CaracterísticasSem história, apenas Gameplay e muita explosão2 níveis de dificuldades (Normal e Hard)Disponível em English e Português (Brasil)8 arenas diferentes<b>Links:</b><b>Links:</b><div class="text-center" style="text-align: center;"><a id="link" class="col-md-1 " href="https://store.steampowered.com/app/1205540/Shmup_Arena/?fbclid=IwAR0qEHjOhxPTEsL3MmH-tipi_Vxm9wxdPAbXnNv-15HVO30KiWodcET5Uno" target="_blank" rel="noopener noreferrer">Steam</a><a id="link" class="col-md-1 " href="https://twitter.com/RevoxGames" target="_blank" rel="noopener noreferrer">Twitter</a><!-- <a id="link" class="col-md-1 " href="mailto:coldcablegames@gmail.com" >E-mail</a><a id="link" class="col-md-1 " href="https://www.facebook.com/coldcable/" target="_blank" rel="noopener noreferrer">Facebook</a>--><iframe src="https://www.youtube.com/embed/gpW7mx01Wjg" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div><!--sidebar--><div class="col-md-4 sidebar mt-5"><div id="parceiro"></div></div>',
    slug: "shump-arena",
    scheduled: false,
    schedule: moment().format("DD/MM/YYYY HH:mm:ss"),
    slide: false,
    middle: false,
    gameplay: false,
    public: false,
    midSection: true,
    thumb: "shumparena.jpg",
  },
];

const imagesData = [
  {
    name: "assaultonthesky.jpg",
  },
  {
    name: "flepuja.jpg",
  },
  {
    name: "selenenightmare.jpg",
  },
  {
    name: "streethunter.jpg",
  },
  {
    name: "valentina.jpg",
  },
  {
    name: "dammendlessorcs.jpg",
  },
  {
    name: "rgb-sudoku.jpg",
  },
  {
    name: "depptherapy.jpg",
  },
  {
    name: "shapeNeonChaos.jpg",
  },
  {
    name: "dragaonascente.png",
  },
  {
    name: "dojoran.jpg",
  },
  {
    name: "indiodassombras.jpg",
  },
  {
    name: "rockncow.jpg",
  },
  {
    name: "donthitthebaby.jpg",
  },
  {
    name: "spacejumper.jpg",
  },
  {
    name: "theoldwestsavior.jpg",
  },
  {
    name: "rocketpatrol.jpg",
  },
  {
    name: "thugrace.jpg",
  },
  {
    name: "alizan.jpg",
  },
  {
    name: "shumparena.jpg",
  },
];

const categoriesData = [
  {
    name: "nave",
  },
  {
    name: "rpg",
  },
  {
    name: "casual",
  },
  {
    name: "plataforma",
  },
  {
    name: "aventura",
  },
  {
    name: "ação",
  },
];

const userData = [
  {
    email: "n3586@hotmail.com",
    name: "Bruno Esteves",
    password: "aa",
  },
];

async function main() {
  console.log(`Start seeding ...`);
  console.log(`Start seeding ... Posts`);
  for (const u of postData) {
    const user = await prisma.post.create({
      data: u,
    });
  }
  console.log(`Start seeding ... Images`);

  for (const u of imagesData) {
    const user = await prisma.images.create({
      data: u,
    });
  }
  console.log(`Start seeding ... Cateogpries`);

  for (const u of categoriesData) {
    const cats = await prisma.cats.create({
      data: u,
    });
  }

  for (const u of userData) {
    const user = await prisma.users.create({
      data: u,
    });
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    // process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
