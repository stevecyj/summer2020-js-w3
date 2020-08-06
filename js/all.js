var app = new Vue({
  el: "#app",
  data: {
    products: [
      {
        id: 1586934917210,
        unit: "雙",
        category: "original",
        title: "潮男必備",
        origin_price: 80000,
        price: 16888,
        description: "街頭穿搭物首選",
        content: "當季最新款",
        is_enabled: 1,
        imageUrl: "https://upload.cc/i1/2020/07/10/cxz3t0.jpg",
        star: "★★★★★",
      },
      {
        id: 1196934917910,
        unit: "雙",
        category: "original",
        title: "女神必搭",
        origin_price: 120000,
        description: "吸睛爆款",
        content: "",
        price: 36666,
        is_enabled: 0,
        imageUrl: "https://upload.cc/i1/2020/07/10/8plOPY.jpg",
        star: "★★★★★",
      },
    ],
    tempProduct: {},
  },
  methods: {
    updateProduct() {
      //編輯
      const tempId = this.tempProduct.id;
      const newId = new Date().getTime();
      if (tempId) {
        //假如tempId為true執行下面程式碼
        this.products.forEach((item, i) => {
          if (item.id === tempId) {
            this.products[i] = this.tempProduct;
          }
        });
      } else {
        //tempId若為false執行else
        //新增
        this.tempProduct.id = newId;
        this.products.push(this.tempProduct);
      }
      this.tempProduct = {};
      $("#productModal").modal("hide");
    },
    openModal(isNew, item) {
      if (isNew == "new") {
        this.tempProduct = {};
        $("#productModal").modal("show");
      } else if (isNew == "edit") {
        this.tempProduct = Object.assign({}, item);
        $("#productModal").modal("show");
      } else if (isNew == "delete") {
        $("#delProductModal").modal("show");
        this.tempProduct = Object.assign({}, item);
      }
    },
    delProduct() {
      const id = this.tempProduct.id;
      if (this.tempProduct.id) {
        this.products.forEach((item, i) => {
          if (item.id === id) {
            this.products.splice(i, 1);
            this.tempProduct = {};
          }
        });
      }
      $("#delProductModal").modal("hide");
    },
  },
});
