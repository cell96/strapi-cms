import type { Schema, Attribute } from '@strapi/strapi';

export interface MenuItemsMenuItems extends Schema.Component {
  collectionName: 'components_menu_items_menu_items';
  info: {
    displayName: 'menu-items';
    icon: 'cup';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.String;
    price: Attribute.Decimal;
    image: Attribute.Media;
    ingredients: Attribute.RichText;
  };
}

export interface RestaurantInformationOpeningHours extends Schema.Component {
  collectionName: 'components_restaurant_information_opening_hours';
  info: {
    displayName: 'Opening Hours';
    icon: 'clock';
  };
  attributes: {
    hours: Attribute.String;
    days: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'menu-items.menu-items': MenuItemsMenuItems;
      'restaurant-information.opening-hours': RestaurantInformationOpeningHours;
    }
  }
}
