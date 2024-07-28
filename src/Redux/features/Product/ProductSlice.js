import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { products_list } from '../../../services/Product-service';


// Create an async thunk for fetching products
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ offset, limit, filters }, { rejectWithValue }) => {
    try {
      const response = await products_list({ offset, limit, ...filters }); // Use the service function
      return response;
    } catch (error) {
      return rejectWithValue(error); // Use rejectWithValue to handle the error
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    offset: 0,
    limit: 9,
    hasMore: true,
    status: 'idle',
    error: null,
    filters: {
      category_id: '',
      subcategory_id: '',
      size_id: '',
      color_id: '',
      occution_id: '',
      suboccution_id: '',
      min_price: '',
      max_price: '',
      name: '',
      sort_by: '',
    },
  },
  reducers: {
    resetProducts: (state) => {
      state.items = [];
      state.offset = 0;
      state.hasMore = true;
      state.status = 'idle';
      state.error = null;
    },
    incrementOffset: (state) => {
      state.offset += state.limit;
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = [...state.items, ...action.payload.products];
        state.hasMore = action.payload.hasMore;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { resetProducts, incrementOffset, setFilters } = productsSlice.actions;

export default productsSlice.reducer;
