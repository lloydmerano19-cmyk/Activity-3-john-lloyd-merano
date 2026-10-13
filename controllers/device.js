/*
    MIT License
    
    Copyright (c) 2025 Christian I. Cabrera || XianFire Framework
    Mindoro State University - Philippines

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    */
import { device, sequelize } from "../models/Device.js";
await sequelize.sync();
const device ={
  index: async (req, res) => {
    res.send("Index Page");
  },
  insert: async (req, res) => {
    try {
      const { Name, Type, Quantity, Price, DatePurchased } = req.body;
      const e = await device.create({ Name, Type, Quantity, Price, DatePurchased });
      res.json(e);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  all: async (req, res) => {
    try {
      const data = await device.findAll();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  one: async (req, res) => {
    try {
      const id = req.params.id;
      const data = await device.findByPk(id);
      res.json({
        data: data,
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { Name, Type, Quantity, Price, DatePurchased } = req.body;
      const rep = await device.update(
        { Name, Type, Quantity, Price, DatePurchased },
        { where: { id } }
      );
      res.json(rep);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await device.destroy({ where: { id } });
      res.json({ message: "DELETED" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

};
export { device };