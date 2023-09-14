export type User = {
  password: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  uid: string;
  avatar: string;
  gender: string;
  phone_number: string;
  displayed_picture: boolean;
};

export type Report = {
  users: number;
  displayed_photo_percentage: number;
};
