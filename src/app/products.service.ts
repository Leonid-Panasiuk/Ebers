import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [{
    "id": 1,
    "name": "Гілурон:",
    "label": "Гілурон — засіб профілактично-гігієнічний, має регенеративні, антисептичні, імуностимулюючі, протизапальні властивості, та сприяє швидкому відновленню слизової оболонки піхви. Гіалуронова кислота як природний полісахарид обволікає слизову оболонку піхви, створюючи захисний бар&#39;єр, сприяє загоєнню слизової оболонки піхви, усуває запалення (зменшує почервоніння та роздратування), зміцнює стінки піхви після діатермокоагуляції, лазерної терапії і кріотерапії шийки матки або піхви, проявляє зволожуючі властивості при сухості піхви. Екстракт календули забезпечує протизапальний ефект, прискорює процеси відновлення, має протигрибкову, антимікробну, захисну, імуностимулюючу дію. Екстракт олії чайного дерева надає потужну протизапальну, протигрибкову, бактерицидну дію. Біологічно активні речовини чайного дерева зволожують слизову оболонку піхви Олія Амаранту володіє протизапальною, ранозагоювальною, бактерицидною дією Олія зеленої кави має антиоксидантну, тонізуючу дію, та покращує кровообіг судин",
    "price": 240,
    "desc": "Гілурон — засіб профілактично-гігієнічний, має регенеративні, протизапальні властивості, та сприяє швидкому відновленню слизової оболонки піхви.",
    imageUrl: "/assets/images/Гілурон фото коробка(tr).jpg",
  },
  {
    "id": 2,
    "name": "Нормера:",
    "label": "Засіб Нормера використовується за рекомендацією лікаря як профілактично-гігієнічний засіб при геморої, тріщинах заднього проходу, проктитах, сігмоідіти, криптитах, фісурах, періанальних фістулах, додатково очищає кишечник від слизу і калу, нейтралізує кишкові гнильні токсини, оновлює слизову оболонку шлунково-кишкового тракту при запальних і ерозивних процесах, порушеннях цілісності і захворюваннях шкірних покривів анального отвору, в тому числі тріщини та запальні процеси, гострі та хронічні екземи анального отвору. Може використовуватись при хронiчних простатитах.",
    "price": 160,
    "desc": "Нормера - засіб профілактично-гігієнічний, має антиоксидантну, імуномоделюючу, в'яжучу, протизапальну, ранозагоювальну, регенеруючу, бактерицидну, білевгамовуючу, спазмолітичну, кровоспинну. Нормера - рекомендовано для профілактики та лікування геморою.",
    imageUrl: "/assets/images/Нормера фото коробка(tr).jpg"
  },
  {
    "id": 3,
    "name": "Регексін:",
    "label": "Розчин хлоргексидину біглюконату чинить швидку та виражену дію на грампозитивні та грамнегативні бактерії, дріжджі та дерматофіти:Treponema pallidum,Chlamidia spp,Neisseria gonorrheae,Trichomonas vaginalis. Мало чутливі штами Pseudomonas spp.,Proteus spp. Нечутливі до засобу кислостійкі форми бактерій, спори бактерій, гриби, віруси.",
    "price": 240,
    "desc": "Регексін- засіб профілактично-гігієнічний має протизапальну , бактерицидну та заспокійливу дію на слизову оболонку жіночої статевої сфери.",
    imageUrl: "/assets/images/Регексін фото коробка(tr).jpg"
    
  },
  {
    "id": 4,
    "name": "Фізорм:",
    "label": "Властивості: Фізорм — засіб профілактично-гігієнічний, має антибактеріальну, протигрибкову, протизапальну, імуностимулюючу, регенеративну, анестезуючу, протипухлинну, адаптогенну дії.",
    "price": 240,
    "desc": "Фізорм — засіб профілактично-гігієнічний, має антибактеріальну, протигрибкову, протизапальну, імуностимулюючу, регенеративну, анестезуючу, протипухлинну, адаптогенну дії. Фізорм - для лікування та профілактики простатиту.",
    imageUrl: "/assets/images/Фізорм фото коробка(tr).jpg"
    
  },
  
  ];

  constructor() { }

  public getProducts(): Product[] {
    return this.products;
  }
}

export class Product {
  id: number;
  name: string;
  label: string;
  desc:string;
  price: number;
  imageUrl: string;
}

