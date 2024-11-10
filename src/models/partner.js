import { Schema, model, models } from "mongoose";
import { type } from "os";

const PartnerSchema = new Schema(
  {
    name: {
      type: String,
      requied: [true, "El nombre del comercio es requerido"],
      trim: true,
      maxlength: [40, "El nombre no puede contener más de 40 caracteres"],
    },
    logo_key: {
      type: String,
      requied: true,
      trim: true,
      maxlength: [
        40,
        "El nombre de la imagen no puede contener más de 40 caracteres",
      ],
    },
    color: {
      type: String,
      requied: false,
      trim: true,
    },
    horarios: {
      publicado: {
        type: String,
        requied: [true, "El horario publicado es requerido"],
        trim: true,
        maxlength: [40, "El texto no puede contener más de 40 caracteres"],
      },
      general: {
        type: String,
        requied: [true, "El horario general es requerido"],
        trim: true,
        maxlength: [40, "El texto no puede contener más de 40 caracteres"],
      },
      parcial: {
        type: String,
        requied: false,
        trim: true,
        maxlength: [40, "El texto no puede contener más de 40 caracteres"],
      },
    },
    cargos: {
      caja_de_pizza: {
        type: String,
        requied: [true, "Debes definir si esta incluido o cuesta"],
        maxlength: [10, "El texto no puede contener más de 10 caracteres"],
      },
      eco_friendly: {
        type: Boolean,
        requied: [true, "Debes definir si el establecimiento es eco-friendly."],
        maxlength: [40, "El texto no puede contener más de 40 caracteres"],
      },
      envase_eco: {
        type: String,
        requied: [true, "Debes definir si esta incluido o cuesta"],
        maxlength: [10, "El texto no puede contener más de 10 caracteres"],
      },
    },
    menu_keys: {
      type: Array,
      requied: [true, "Debes definir los nombres de la cartas, uno a la vez"],
      maxlength: [10, "El texto no puede contener más de 10 caracteres"],
    },
    alt: {
      type: String,
      requied: [true, "El nombre del comercio es requerido"],
      trim: true,
      maxlength: [50, "El nombre no puede contener más de 50 caracteres"],
    },
    description: {
      type: String,
      requied: [true, "El nombre del comercio es requerido"],
      trim: true,
      maxlength: [100, "El nombre no puede contener más de 100 caracteres"],
    },
  },
  { timestamps: true },
);

export default models.PartnerSchema || model("partners", PartnerSchema);
