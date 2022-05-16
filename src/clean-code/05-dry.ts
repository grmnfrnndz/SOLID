type Size = ''|'S'|'M'|'L';

class Product {

    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ){};

    isProductReady():boolean {
        // DRY
        for (const key in this ) {
            switch (typeof(this[key]) ) {
                case 'string':
                    if ((<string><unknown>this[key]).length <= 0) throw Error(`${key} Is Empty`);
                    break;
                case 'number':
                    if ((<number><unknown>this[key]) <= 0) throw Error(`${key} Is Zero`);
                    break;
                default:
                    throw Error(`${typeof(this[key])} Is Not Supported`) 
            }
        }

        return true;
    }

    toString(){
        // No DRY
        // if (this.name.length <= 0) throw Error('Name Is Empty');
        // if (this.price <= 0) throw Error('Price Is Zero');
        // if (this.size.length <= 0) throw Error('Size Is Empty');

        if (!this.isProductReady()) return ;


        return `${this.name} (${this.price}), ${this.size}`;
    }
}



(()=>{

    const bluePants = new Product('Blue Large Pants', 10, 'S');
    console.log(bluePants.toString());

})();