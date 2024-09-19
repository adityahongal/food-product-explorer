import axios from 'axios';

const BASE_URL = 'https://world.openfoodfacts.org';

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchProducts = async (page = 1, pageSize = 20) => {
  try {
    const response = await api.get('/cgi/search.pl', {
      params: {
        action: 'process',
        json: true,
        page,
        page_size: pageSize,
      },
    });
    return response.data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const searchProducts = async (query, page = 1, pageSize = 20) => {
  try {
    const response = await api.get('/cgi/search.pl', {
      params: {
        search_terms: query,
        action: 'process',
        json: true,
        page,
        page_size: pageSize,
      },
    });
    return response.data.products;
  } catch (error) {
    console.error('Error searching products:', error);
    throw error;
  }
};

export const fetchProductByBarcode = async (barcode) => {
  try {
    const response = await api.get(`/api/v0/product/${barcode}.json`);
    return response.data.product;
  } catch (error) {
    console.error('Error fetching product by barcode:', error);
    throw error;
  }
};

export const fetchCategories = async () => {
  try {
    const response = await api.get('/categories.json');
    return response.data.tags;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const fetchProductsByCategory = async (category, page = 1, pageSize = 20) => {
  try {
    const response = await api.get(`/category/${category}/${page}.json`, {
      params: {
        page_size: pageSize,
      },
    });
    return response.data.products;
  } catch (error) {
    console.error('Error fetching products by category:', error);
    throw error;
  }
};