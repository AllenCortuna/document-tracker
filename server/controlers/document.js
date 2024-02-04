import express from "express";
import cors from "cors";
import db from "../db.js";


const app = express();
app.use(cors());
app.use(express.json());

// Route to get all posts
export const getDocuments = app.get("/get", (req, res) => {
  db.query("SELECT * FROM documents", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

// Route to get one post
export const getDocument = app.get("/getFromId/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM posts WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

// Route for creating the post
export const createDocument =app.post("/create", (req, res) => {
  const name = req.body.name;
  const fileUploaded = req.body.fileUploaded;
  const remarks = req.body.remarks;

  db.query(
    "INSERT INTO documents (name, remarks, fileUploaded) VALUES (?,?,?)",
    [name, remarks, fileUploaded],
    (err, result) => {
      if (err) {
        res.send(err.sqlMessage);
      }
      res.send("file uploaded");
    }
    
  );
});

// Route to delete a post

export const deleteDocument = app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM posts WHERE id= ?", id, (err, result) => {
    if (err) {
      console.log(err)``;
    }
  });
});