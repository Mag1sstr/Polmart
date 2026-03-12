import { Request, Response, NextFunction } from "express";
import { Product } from "../models/Product";
import { Category } from "../models/Category";

// export const getProducts = async (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   try {
//     const { category } = req.query;

//     let filter: any = {};

//     if (category) {
//       const categoryDoc = await Category.findOne({
//         slug: category,
//       });

//       if (!categoryDoc) {
//         return res.json([]);
//       }

//       filter.category = categoryDoc._id;
//     }

//     const products = await Product.find(filter).populate("category");

//     res.json(products);
//   } catch (err) {
//     next(err);
//   }
// };
export const getProducts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {
      category,
      title,
      min_price,
      max_price,
      page = 1,
      size = 10,
    } = req.query;

    const filter: any = {};

    if (category) {
      const categoryDoc = await Category.findOne({ slug: category });

      if (!categoryDoc) {
        return res.json({
          products: [],
          totalPages: 0,
          totalProducts: 0,
        });
      }

      filter.category = categoryDoc._id;
    }

    if (title) {
      filter.title = { $regex: title, $options: "i" };
    }

    if (min_price || max_price) {
      filter.price = {};

      if (min_price) {
        filter.price.$gte = Number(min_price);
      }

      if (max_price) {
        filter.price.$lte = Number(max_price);
      }
    }

    const pageNumber = Number(page);
    const pageSize = Number(size);

    const skip = (pageNumber - 1) * pageSize;

    const totalProducts = await Product.countDocuments(filter);

    const totalPages = Math.ceil(totalProducts / pageSize);

    const products = await Product.find(filter)
      .populate("category")
      .skip(skip)
      .limit(pageSize)
      .sort({ createdAt: -1 });

    res.json({
      products,
      totalPages,
      totalProducts,
      currentPage: pageNumber,
    });
  } catch (err) {
    next(err);
  }
};

export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const product = await Product.findById(req.params.id).populate("category");
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    next(err);
  }
};

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const files = req.files as Express.Multer.File[];

    const imagePaths = files.map((file) => file.filename) || [];
    const product = await Product.create({ ...req.body, images: imagePaths });

    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
};

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    next(err);
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
