(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    
    class ProductService {

        // private httpAdapter: Object;

        getProductById(id: number) {
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProduct(product: Product) {
            console.log('Guardando en base de datos', product );
        }

    }

    class Mailer {
        private masterEmail: string = 'german.contreras.f@gmail.com';

        sendMail(emailList: string[], template: 'to-clients' | 'to-admins') {
            console.log('Enviando correo a los clientes');
        }
    }


    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
     n  
        private productService: ProductService;
        private mailer: Mailer;

        constructor(productService: ProductService, mailer: Mailer){
            this.productService = productService;
            this.mailer = mailer;
        }


        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            this.productService.getProductById(id);
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            this.productService.saveProduct(product);
        }
    
        notifyClients() {
            console.log('Enviando correo a los clientes');
            this.mailer.sendMail(['german.contreras.f@gmail.com'], 'to-clients');
        }
    }
    
    class CartBloc {
        private itemsInCart: Object[] = [];

        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    }

    const productService = new ProductService();
    const mailer = new Mailer();


    const productBloc = new ProductBloc(productService, mailer);
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.onAddToCart(10);

})();