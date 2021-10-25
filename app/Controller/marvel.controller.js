const Customer = require("../Models/customer.model");
module.exports = {
  getData: (req, res) => {
    Customer.fetchData((data, err) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
  },
  getDataById: (req, res) => {
    Customer.fetchDataById(req.params.customerId, (data, err) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
  },
  postData: (req, res) => {
    const newCustomer = {
      email: req.body.email,
      name: req.body.name,
      active: req.body.active,
    };
    Customer.createCustomer(newCustomer, (data, err) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
  },
  updateData: (req, res) => {
    const customer = {
      email: req.body.email,
      name: req.body.name,
      active: req.body.active,
    };
    Customer.updateCustomerById(
      req.params.customerId,
      customer,
      (data, err) => {
        if (err) {
          res.send(err);
        } else {
          res.send(data);
        }
      }
    );
  },
  deleteDataById: (req, res) => {
    Customer.deleteCustomerById(req.params.customerId, (data, err) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
  },
  deleteAllData: (req, res) => {
    Customer.deleteAllCustomer((data, err) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
  },
};
