
export type TFullName = {
  firstName: string;
  lastName: string;
};

export type TAddress = {
  street: string;
  city: string;
  country: string;
};

// type TOrders<{productName:string,price: number,quantity: number}> = {}
export type TOrders<T> = Array<T>;

export type TUser = {
  userId: string;
  username: string;
  password: string;
  fullName: TFullName;
  age: number;
  email: string;
  isActive: string;
  hobbies: string[];
  address: TAddress;
  orders?: TOrders<{ productName: string; price: number; quantity: number }>;
};


