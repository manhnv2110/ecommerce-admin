import api from '../utils/api';

export const reviewService = {
  // Lấy danh sách reviews với filters và pagination
  getReviews: async (page = 0, filters = {}) => {
    try {
      const params = {
        page: page.toString(),
        size: "10",
        sort: "createdAt,DESC",
      };

      if (filters.productId) params.productId = filters.productId;
      if (filters.userId) params.userId = filters.userId;
      if (filters.rating) params.rating = filters.rating;

      const response = await api.get('/admin/reviews', { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching reviews:', error);
      throw error;
    }
  },

  // Xóa review
  deleteReview: async (reviewId) => {
    try {
      await api.delete(`/admin/reviews/${reviewId}`);
      return true;
    } catch (error) {
      console.error('Error deleting review:', error);
      throw error;
    }
  },
};
