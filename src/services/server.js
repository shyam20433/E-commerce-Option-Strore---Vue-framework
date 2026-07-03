import axios from "axios";

const api=axios.create({
  baseURL:'http://localhost:8080'
}
)

const apicall={
  async  getproducts(){
    const data=await api.get('/products')
    return data.data
  },
  async getproduct(id){
    const data=await api.get(`/products/${id}`)
    return data.data
  },
  async delproduct(id){
    const data=await api.delete(`/products/${id}`)
    return data.data
  },
  async addproduct(product){
    const data=await api.post('/products',product)
    return data.data
  },
  async updateproduct(id,product){
    const data=await api.put(`/products/${id}`,product)
    return data.data
  },




  //carts 
  async getCart() {
        const res = await api.get("/carts");
        return res.data;
    },

    async addCart(product) {
        const res = await api.post("/carts", product);
        return res.data;
    },

    async updateCart(id, product) {
        const res = await api.put(`/carts/${id}`, product);
        return res.data;
    },

    async deleteCart(id) {
        const res = await api.delete(`/carts/${id}`);
        return res.data;
    }


}

export default apicall;
