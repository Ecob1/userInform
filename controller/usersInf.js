const express = require('express');
const app = express();

// Creating a function to create a contact.
const createContact = async (req, res) => {
    const userPersonalInf = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      student_id: req.body.student_id,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode,
    };
    const response = await mongodb
      .getDb()
      .db("Guero")
      .collection("userInfor")
      .insertOne(userPersonalInf);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res
        .status(500)
        .json(
          response.error || "Some error occurred while creating the contact."
        );
    }
  };