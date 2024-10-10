// export const BASE_URL = 'https://jbp2e2pm2s.us-east-2.awsapprunner.com/api/v1';
export const BASE_URL = "http://localhost:4500/api/v1";

export default {
  // -----AUTH------//
  signUp: BASE_URL + "/user/signup",
  signIn: BASE_URL + "/user/login",
  socialLogin: BASE_URL + "/user/socialLogin",
  updateMe: BASE_URL + "/user/updateProfile",
  updatePassword: BASE_URL + "/user/updateMyPassword",

  //------Home tab ----//
  getHomeData: BASE_URL + "/appItems",
  dashboard: BASE_URL + "/admin",
  videos: BASE_URL + "/video",
  kit: BASE_URL + "/orderKit",
  msds: BASE_URL + "/mSDS",
  products: BASE_URL + "/product",

  // -----Service------//-----Service Provider
  createService: BASE_URL + "/service",
  getServices: BASE_URL + "/service",
  getProposals: BASE_URL + "/proposal",
  getCategories: BASE_URL + "/category",

  //-----Service-------// Client

  // getServices: BASE_URL + '/service',
  getServiceDetail: `${BASE_URL}/service`,
  createProposal: BASE_URL + "/proposal",
  getMyBookings: BASE_URL + "/proposal",
  acceptOrRejectProposal: BASE_URL + "/proposal",

  //Profile
  getPrivacy: BASE_URL + "/privacy",
  getSinglePrivacy: BASE_URL + "/privacy",
  getNotifications: BASE_URL + "/user/mynotifications",
  getInfo: BASE_URL + "/user/getInfo",

  // reviews

  reviews: BASE_URL + "/review",
};
