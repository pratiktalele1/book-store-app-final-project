export class Books {
    id:number ;
	bookName:string ;
    bookAuthor:string ;
	bookDetail: string ;
	bookPrice: number ;
	inStock:number ;
	bookImage:string;
	addedToBag:boolean;

	constructor(obj:any){
		this.id=obj.id;
		this.bookName=obj.bookName;
		this.bookAuthor=obj.bookAuthor;
		this.bookDetail=obj.bookDetail;
		this.bookPrice=obj.bookPrice;
		this.inStock=obj.inStock;
		this.bookImage=obj.bookImage;
		this.addedToBag=obj.addedToBag;
	}
}
