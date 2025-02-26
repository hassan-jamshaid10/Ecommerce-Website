import React, { useState } from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  CardMedia,
  Grid,
} from "@mui/material";
import { Edit, Delete, Add, PhotoCamera } from "@mui/icons-material";

// Sample Product Data
const initialProducts = [
  { id: 1, name: "Laptop", price: 1200, category: "Electronics", images: [] },
  { id: 2, name: "Phone", price: 800, category: "Electronics", images: [] },
  { id: 3, name: "Headphones", price: 150, category: "Accessories", images: [] },
];

const ProductsPage = () => {
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({ id: null, name: "", price: "", category: "", images: [] });

  // Handle search input
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  // Open dialog for adding/editing products
  const handleOpenDialog = (product = { id: null, name: "", price: "", category: "", images: [] }) => {
    setCurrentProduct(product);
    setOpenDialog(true);
  };

  // Handle form submission
  const handleSaveProduct = () => {
    if (currentProduct.id) {
      // Update existing product
      setProducts((prev) =>
        prev.map((p) => (p.id === currentProduct.id ? currentProduct : p))
      );
    } else {
      // Add new product
      setProducts((prev) => [...prev, { ...currentProduct, id: Date.now() }]);
    }
    setOpenDialog(false);
  };

  // Handle delete
  const handleDeleteProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  // Handle image upload
  const handleImageUpload = (event) => {
    const files = event.target.files;
    if (files) {
      const imageUrls = Array.from(files).map((file) => URL.createObjectURL(file));
      setCurrentProduct((prev) => ({ ...prev, images: [...prev.images, ...imageUrls] }));
    }
  };

  return (
    <Container>
      <Typography variant="h5" sx={{ my: 3 }}>
        Manage Products
      </Typography>

      {/* Search & Add Product */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
        <TextField
          label="Search Product"
          variant="outlined"
          size="small"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="contained" startIcon={<Add />} onClick={() => handleOpenDialog()}>
          Add Product
        </Button>
      </div>

      {/* Products Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>

                {/* Display Images */}
                <TableCell>
                  {product.images.length > 0 ? (
                    <CardMedia
                      component="img"
                      height="50"
                      image={product.images[0]}
                      alt="Product"
                      style={{ borderRadius: 5 }}
                    />
                  ) : (
                    <Typography variant="body2" color="textSecondary">
                      No Image
                    </Typography>
                  )}
                </TableCell>

                <TableCell>{product.name}</TableCell>
                <TableCell>${product.price}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleOpenDialog(product)}>
                    <Edit />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDeleteProduct(product.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add/Edit Product Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>{currentProduct.id ? "Edit Product" : "Add Product"}</DialogTitle>
        <DialogContent>
          <TextField
            label="Product Name"
            fullWidth
            margin="dense"
            value={currentProduct.name}
            onChange={(e) => setCurrentProduct({ ...currentProduct, name: e.target.value })}
          />
          <TextField
            label="Price"
            fullWidth
            margin="dense"
            type="number"
            value={currentProduct.price}
            onChange={(e) => setCurrentProduct({ ...currentProduct, price: e.target.value })}
          />
          <TextField
            label="Category"
            fullWidth
            margin="dense"
            value={currentProduct.category}
            onChange={(e) => setCurrentProduct({ ...currentProduct, category: e.target.value })}
          />

          {/* Image Upload */}
          <Button variant="contained" component="label" sx={{ mt: 2 }}>
            Upload Images <PhotoCamera sx={{ ml: 1 }} />
            <input type="file" multiple hidden onChange={handleImageUpload} />
          </Button>

          {/* Show uploaded images */}
          {currentProduct.images.length > 0 && (
            <Grid container spacing={2} sx={{ mt: 2 }}>
              {currentProduct.images.map((img, index) => (
                <Grid item xs={4} key={index}>
                  <CardMedia component="img" height="60" image={img} alt="Uploaded" />
                </Grid>
              ))}
            </Grid>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSaveProduct}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ProductsPage;
