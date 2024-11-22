import { Injectable } from '@angular/core';
import { Productos } from '../0models/producto';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  misProductos: Productos[];
  new: Productos[];
  bodySplash: Productos[];
  sleep:Productos[];
  sports:Productos[];
  fav: Productos[];
  constructor() {
    this.new=[];
    this.bodySplash=[];
    this.sleep=[];
    this.sports=[];
    this.fav=[]
    this.misProductos = [
      {
        id: 1,
        nombre: "Perfume Bombshell Midnight",
        precio: 70484,
        descripcion: " Bombshell Midnight llena el ambiente con luces brillante para una celebración radiante. Con una ráfaga intensa de cereza negra, esta fragancia arroja un brillo resplandeciente de fruta lujosa dorada por la escarcha.",
        forSale: true,
        img:"imagenes/p1.avif",
        click:"imagenes/click1.avif",
        tipo: "body splash",
        favorito:false,
      },
      {
        id: 2,
        nombre: "Perfume daring",
        precio: 80561,
        descripcion: "Daring es una fragancia intrépida que pone de manifiesto la dualidad entre la frescura etérea y la calidez terrosa. La esencia crujiente de la cáscara de bergamota ilumina la apertura del aroma contra una capa de exuberante musgo de roble.",
        forSale: true,
        img:"imagenes/p2.avif",
        click:"imagenes/click2.jpg",
        tipo: "body splash",
        favorito:false,
      },
      {
        id: 3,
        nombre: "Perfume Tease Sugar Fleur",
        precio: 80561,
        descripcion: "Tease Sugar Fleur se abre con la acidez fresca de PINK manzana Lady para crear un encantador brillo de fruta exquisita. En el corazón, los pétalos impresionantes se sumergen en un glaseado de caramelo para crear una versión fascinante de un exclusivo aroma floral dulce.",
        forSale: true,
        img:"imagenes/p3.avif",
        click:"imagenes/click3.jpg",
        tipo: "body splash",
        favorito:false,
        
      },
      {
        id: 4,
        nombre: "Perfume Bombshell",
        precio: 60408,
        descripcion: " La esencia misma de esta fragancia despide el aroma de la flor insignia de Bombshell: la peonía. Aquí, la variedad son los pétalos limpios de peonía paradisíaca del Tíbet. La orquídea de vainilla de Madagascar aporta una dulzura cremosa. ",
        forSale: true,
        img:"imagenes/p4.avif",
        click:"imagenes/click4.jpg",
         tipo: "body splash",
         favorito:false,
      },
      {
        id: 5,
        nombre: "Perfume Bombshell Seduction ",
        precio: 60408,
        descripcion: " La salvia francesa abre esta fragancia con un toque fresco y ligero. Un embriagador dúo de flores blancas conforman el brillante corazón floral: nuestra peonía blanca insignia y la cremosa tuberosa. ",
        forSale: true,
        img:"imagenes/p5.avif",
        click:"imagenes/click5.jpg",
         tipo: "body splash",
         favorito:false,
      },
      {
        id: 6,
        nombre: "Perfume Bombshell Intense",
        precio: 80561,
        descripcion: ", Bombshell Intense es la emoción potente de todo lo que se esconde tras ese color. La fragancia se abre con una cremosa ráfaga de cereza exuberante y brillante. A continuación, la fragancia se mueve en una capa de peonía roja aterciopelada para una toma profunda y saturada de la insignia floral de pétalos de Bombshell. ",
        forSale: true,
        img:"imagenes/p6.avif",
        click:"imagenes/click6.jpg",
         tipo: "body splash",
         favorito:false,
      },
      {
        id: 7,
        nombre: "Permufe Tease Candy Noir",
        precio: 80561,
        descripcion: " Tease Candy Noir es una extensión de nuestra icónica fragancia Tease. Este perfume está formulado con notas altas que evocan la dulzura, el brillo y la acidez del glaseado de frambuesa.",
        forSale: true,
        img:"imagenes/p7.avif",
        click:"imagenes/click7.jpg",
         tipo: "body splash",
         favorito:false,
      },
      {
        id: 8,
        nombre: "Perfume Heavenly",
        precio: 80561,
        descripcion: "Un clásico etéreo. Luminoso y cálido, Heavenly fue creado para capturar la fuerza interior y el resplandor dentro de cada mujer. Este perfume se abre con un toque de frutas efervescentes y pasa a un ramo artesanal de románticas flores blancas en el corazón: fresia, loto y jazmín.",
        forSale: true,
        img:"imagenes/p8.avif",
        click:"imagenes/click8.jpg",
         tipo: "body splash",
         favorito:false,
      },
      {
        id: 9,
        nombre: "Perfume Heavenly ​​​​​​​Dream Angel",
        precio: 80561,
        descripcion: " una fragancia que es tan inspiradora como ella. Este perfume tiene notas altas de frutas brillantes: néctar de frambuesa, fresa blanca y naranja mandarina.",
        forSale: true,
        img:"imagenes/p9.avif",
        click:"imagenes/click9.jpg",
         tipo: "body splash",
         favorito:false,
      },
      {
        id: 10,
        nombre: "Perfume Bombshell Nights",
        precio: 80561,
        descripcion: "De regreso solo por tiempo limitado: Bombshell Nights. La grosella negra brillante, deliciosa y parecida a las bayas, le da a la fragancia un comienzo coqueto.",
        forSale: true,
        img:"imagenes/p10.avif",
        click:"imagenes/click10.avif",
         tipo: "body splash",
         favorito:false,
      },
      {
        id: 11,
        nombre: "Conjunto de pijama largo de modal suave",
        precio: 75523,
        descripcion: "Los lazos de terciopelo y los detalles de ribetes le dan un toque lujoso de temporada a nuestra mezcla muy suave de modal, tan increíblemente cómoda que querrás comprar más.",
        forSale: true,
        img:"imagenes/p11.avif",
        click:"imagenes/click11.avif",
        tipo: "sleep",
        favorito:false,
      },
      {
        id: 12,
        nombre: "Conjunto de pijama largo de algodón y modal",
        precio: 70484,
        descripcion: "Confeccionado en una combinación de modal y algodón ultrasuave, este pijama clásico es todo lo que has soñado.",
        forSale: true,
        img:"imagenes/p12.avif",
        click:"imagenes/click12.avif",
        tipo: "sleep",
        favorito:false,
      },
      {
        id: 13,
        nombre: "Conjunto de pijama largo de franela con estampado emergente",
        precio: 70484,
        descripcion: "La comodidad del algodón más la suavidad del modal: esta es la franela cepillada que querrás usar para estar abrigada durante toda la temporada.",
        forSale: true,
        img:"imagenes/p13.avif",
        click:"imagenes/click13.avif",
        tipo: "sleep",
        favorito:false,
      },
      {
        id:14,
        nombre:"Conjunto de pijama largo de satén glaseado con gotas de rocío",
        precio: 70484,
        descripcion:"Este brillante conjunto de satén repleto de destellos en forma de estrella es una prenda esencial de uso diario con un toque lujoso.",
        forSale:true,
        img:"imagenes/p14.avif",
        click:"imagenes/click14.avif",
        tipo: "sleep",
        favorito:false,
      },
      {
        id:15,
        nombre:"Conjunto de pijama largo de satén glaseado",
        precio: 80561,
        descripcion:"Relájate con este conjunto de pantalón de satén y prenda superior de mangas largas en combinación, salpicado con nuestro sutil diseño de logo. Acabado con bolsillo en el pecho, cuello con muesca y ribete decorativo.",
        forSale:true,
        img:"imagenes/p15.avif",
        click:"imagenes/click15.avif",
        tipo: "sleep",
        favorito:false,
      },
      {
        id:16,
        nombre:"Conjunto de pijama largo de modal",
        precio: 70484,
        descripcion:"Nuestros pijamas de modal más amados son lo que todas soñamos. Con una tela muy suave y sedosa con la cantidad justa",
        forSale:true,
        img:"imagenes/p16.avif",
        click:"imagenes/click16.avif",
        tipo: "sleep",
        favorito:false,
      },
      {
        id:17,
        nombre:"Camisa de dormir suave de modal",
        precio: 40255,
        descripcion:"Este estilo alargado con botones al frente está confeccionado con nuestra tela de modal elástica y suave como la seda, ideal para una noche de sueño cómoda o un día de descanso.",
        forSale:true,
        img:"imagenes/p17.avif",
        click:"imagenes/click17.avif",
        tipo: "sleep",
        favorito:false,
      },
      {
        id:18,
        nombre:"Conjunto de pijama corto de franela",
        precio: 55370,
        descripcion:"La comodidad del algodón más la suavidad del modal: esta es la franela cepillada que querrás usar para estar abrigada durante toda la temporada. La prenda superior con botones al frente incluye nuestro logo bordado en el bolsillo.",
        forSale:true,
        img:"imagenes/p18.avif",
        click:"imagenes/click18.avif",
        tipo: "sleep",
        favorito:false,
      },
      {
        id:19,
        nombre:"Camisa de dormir suave de modal",
        precio: 40255,
        descripcion:"Este estilo alargado con botones al frente está confeccionado con nuestra tela de modal elástica y suave como la seda, ideal para una noche de sueño cómoda o un día de descanso.",
        forSale:true,
        img:"imagenes/p19.avif",
        click:"imagenes/click19.avif",
        tipo: "sleep",
        favorito:false,
      },
      {
        id:20,
        nombre:"Luxe Crepe Short Pajama Set",
        precio: 75235,
        descripcion:"Date un capricho con este elegante pijama con este conjunto suave al tacto que presenta una sensación y una caída lujosas. La camiseta de manga larga con cuello combina con los pantalones cortos sin cordones. Juntas, estas piezas ofrecen una experiencia completa de mimos.",
        forSale:true,
        img:"imagenes/p20.avif",
        click:"imagenes/click20.avif",
        tipo: "sleep",
        favorito:false,
      },
      {
        id:21,
        nombre:"New Bata envolvente brillante de punto en ochos de lujo",
        precio: 10000,
        descripcion:"Los días de frío no te tomarán por sorpresa si tienes esas prendas de tejido suave que son abrigadas y elegantes. Este diseño anudado al frente es justo lo que necesitas para acurrucarte y ponerte encima de tus pijamas favoritos o de los pantalones acampanados en combinación. Los cristales resplandecientes añaden un brillo sutil a los puños.",
        forSale:true,
        img:"imagenes/p21.avif",
        click:"imagenes/click21.avif",
        tipo:"new",
        favorito:false,
      },
      {
        id:22,
        nombre:"New Bata corta de satén",
        precio: 60000,
        descripcion:"Los detalles hacen la diferencia en este diseño brillante que se completa con dobladillo tulipán redondeado y un delicado plisado en los hombros.",
        forSale:true,
        img:"imagenes/p22.avif",
        click:"imagenes/click22.avif",
        tipo:"new",
        favorito:false,
      },
      {
        id:23,
        nombre:"New Loción perfumada Bombshell Midnight",
        precio: 25000,
        descripcion:"Envuélvete en tu fragancia favorita. Nuestra loción de absorción rápida que hidrata la piel añade el toque perfecto de aroma. Resplandeciente y lujosa, una rica combinación de frutas oscuras y calidez luminosa.",
        forSale:true,
        img:"imagenes/p23.avif",
        click:"imagenes/click23.avif",
        tipo:"new",
        favorito:false,
      },
      {
        id:24,
        nombre:"New Pantuflas con puntera cerrada de piel sintética",
        precio: 40255,
        descripcion:"Los críticos dicen que son sus pantuflas favoritas con razón. La piel sintética en todo el modelo mantiene los pies calentitos y las plantillas que dan la sensación de caminar sobre una nube dan la comodidad que tienes que sentir para creer. ",
        forSale:true,
        img:"imagenes/p24.avif",
        click:"imagenes/click24.avif",
        tipo:"new",
        favorito:false,
      },
      {
        id:25,
        nombre:"New Bata corta cómoda",
        precio: 60000,
        descripcion:"En el primer lugar de la lista de deseos de todos: nuestra bata afelpada más nueva que es más abrigada y acogedora que nunca. El cuello esmoquin y los prácticos bolsillos te garantizan un look que querrás llevar durante todo el día. ",
        forSale:true,
        img:"imagenes/p25.avif",
        click:"imagenes/click25.avif",
        tipo:"new",
        favorito:false,
      },
      {
        id:26,
        nombre:"Chaqueta con cremallera",
        precio: 70840,
        descripcion:"Ideal para viajar, salir a hacer los mandados o simplemente relajarse. Independientemente de lo que te depare el día, luce un estilo casual y refinado que ha sido confeccionado en nuestra tela de calidad premium de alto rendimiento con una textura acanalada. ",
        forSale:true,
        img:"imagenes/p26.avif",
        click:"imagenes/click26.avif",
        tipo:"sports",
        favorito:false,
      },
      {
        id:27,
        nombre:"Legging acampanado de algodón",
        precio: 45522,
        descripcion:"Desenfadado pero icónico en una mezcla de algodón y modal supersuave, este par suave y elástico se completa con la pernera acampanada y la cintura ancha que te encantan.",
        forSale:true,
        img:"imagenes/p27.avif",
        click:"imagenes/click27.avif",
        tipo:"sports",
        favorito:false,
      },
      {
        id:28,
        nombre:"Chaqueta con cremallera",
        precio: 131604,
        descripcion:"La intersección de la comodidad y la moda. Hay algo satisfactorio en usar una elegante cremallera completa que combina con el resto de tu estilo de ropa deportiva.",
        forSale:true,
        img:"imagenes/p28.avif",
        click:"imagenes/click28.avif",
        tipo:"sports",
        favorito:false,
      },
      {
        id:29,
        nombre:"Top deportivo cómodo y sin costuras",
        precio: 50585,
        descripcion:"Este estilo elegante y cómodo es indispensable para el uso diario. Nuestra tela premium sin costuras ofrece una apariencia y textura totalmente lisa, mientras que la banda larga brinda una cobertura favorecedora para tener un efecto de top corto, para que no tengas que usar la camisa mientras haces ejercicio, si así lo deseas.",
        forSale:true,
        img:"imagenes/p29.avif",
        click:"imagenes/click29.avif",
        tipo:"sports",
        favorito:false,
      },
      {
        id:30,
        nombre:"Legging básico de cintura alta con bolsillo",
        precio: 40458,
        descripcion:"Los leggings deportivos que te encantan ahora son extrasuaves, con elasticidad en 4 sentidos y una pretina alta que se mantiene en su lugar para ofrecerte una comodidad total. Bolsillos laterales profundos que mantienen tus elementos básicos cerca.",
        forSale:true,
        img:"imagenes/p30.avif",
        click:"imagenes/click30.avif",
        tipo:"sports",
        favorito:false,
      },
    ]
    
 

  }

  obtenerNew(){
    this.new = this.misProductos.filter(producto=>producto.tipo==="new")
    console.log(this.new)
  }
  obtenerBodySplash(){
    this.bodySplash = this.misProductos.filter(producto=>producto.tipo==="body splash")
  }
  obtenerSleep(){
    this.sleep = this.misProductos.filter(producto=>producto.tipo==="sleep")
  }
  obtenerSports(){
    this.sports = this.misProductos.filter(producto=>producto.tipo==="sports")
  }
  obtenerFavorito(){
    this.fav = this.misProductos.filter(producto=>producto.favorito===true)
  }

 
}
