import axios from "axios";

export const ERROR = "ERROR";
export const GET_PODUCT_SUCCESS = 'GET_PODUCT_SUCCESS';
export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';

export const getAllProducts = () => {
  return async function(dispatch) {
    let errorMessage = '';

    try {
      const response = await axios.get('http://localhost:3001/products');
      dispatch({type: GET_PODUCT_SUCCESS, payload: response.data});
    } catch (error) {
      errorMessage = 'Producto no encontrado';
      dispatch({type: ERROR, payload: errorMessage})
    }
    return errorMessage;
    }
  };

  export const getProductDetail = (sku) => {
    return async function (dispatch) {
      let errorMessage = '';
  
      try {
        const response = await axios.get(`http://localhost:3001/products/sku/${sku}`);
        dispatch({type: GET_PRODUCT_DETAIL, payload: response.data});
      } catch (error) {
        errorMessage = 'Producto no encontrado';
        dispatch({type: ERROR, payload: errorMessage});
      }
      return errorMessage;
    };
  };

  export const filterByBrand = (brandId) => {
    return async function (dispatch) {
      try {
        const response = await axios.get(`http://localhost:3001/products/brands/${brandId}`);
        dispatch({ type: GET_PODUCT_SUCCESS, payload: response.data });
      } catch (error) {
        dispatch({ type: ERROR, payload: 'Error al filtrar por marca' });
      }
    };
  };
  
  export const filterByCategory = (categoryId) => {
    return async function (dispatch) {
      try {
        const response = await axios.get(`http://localhost:3001/products/categories/${categoryId}`);
        dispatch({ type: GET_PODUCT_SUCCESS, payload: response.data });
      } catch (error) {
        dispatch({ type: ERROR, payload: 'Error al filtrar por categoría' });
      }
    };
  };
  
  export const getCategories = () =>{
    return async function(dispatch){
      try{
        const response = await axios.get(`http://localhost:3001/products/categories/`);
        console.log(response);
        return response.data
      } catch (error){
        console.log(error);
      }
    }
  }

  export const getBrands = () =>{
    return async function(dispatch){
      try{
        const response = await axios.get(`http://localhost:3001/products/brands/`);
        console.log(response);
        return response.data
      } catch (error){
        console.log(error);
      }
    }
  }
  
  export const resetFilters = () => {
    return async function (dispatch) {
      dispatch(getAllProducts());
    };
  };