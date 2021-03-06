import {Request, Response} from 'express';
import knex from '../database/connection';

interface serializedItemsProps {
  id: string,
  title: string,
  image_url: string
}

class ItemsController {
  async index(req:Request, res:Response): Promise<Response> {
    const items = await knex('items').select('*');
  
    const serializedItems: serializedItemsProps[] = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://192.168.15.12:3333/uploads/${item.image}`
      };
    });
  
    return res.json(serializedItems);
  
  }
}

export default ItemsController;