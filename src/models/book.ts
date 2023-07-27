import { DataTypes, Model } from "sequelize";
import db from "../config/db.config";

interface BookAttributes {
  bookId: string;
  title: string;
  datePublished: string;
  description: string;
  pageCount?: number;
  publisher: string
  author: string
}
export class Book extends Model<BookAttributes> { }
Book.init({
  bookId: {
    type: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  datePublished: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  description: {
    type: DataTypes.STRING,
  },
  pageCount: {
    type: DataTypes.INTEGER,
  },
  publisher: {
    type: DataTypes.STRING,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize: db,
  tableName: "Book"
})