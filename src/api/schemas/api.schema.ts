import * as mongoose from 'mongoose';

export const ApiSchema = new mongoose.Schema({
  descricao: String,
  completo: Boolean,
});
