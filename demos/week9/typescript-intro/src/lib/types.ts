//write all your types in here, then you can export import them
export type personType = {
  personName: string;
  personAge: number;
  personLocation: string;
};

//API post object type
export type postType = {
  //by using the optional chining operator here, if a post object does not have a userId property, it doesn't throw an error, it moves on
  userId?: number;
  id: number;
  title: string;
  body: string;
};

//params type
export type paramsType = {
  params: { id: string };
};
