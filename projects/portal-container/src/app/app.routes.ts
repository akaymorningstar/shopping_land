import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: 'product-listing',
      loadComponent: () => import('productListing/Component').then(m => m.AppComponent),
    },
    {
        path: 'product-listing/product-details',
        loadComponent: () => import('productDetails/Component').then(m => m.AppComponent)
    },
    {
        path: 'checkout',
        loadComponent: () => import('checkout/Component').then(m => m.AppComponent)
    },
    {
        path: 'my-cart',
        loadComponent: () => import('shoppingCart/Component').then(m => m.AppComponent)
    },
    {
      path: '**',
      redirectTo: 'remote',
    },
];
