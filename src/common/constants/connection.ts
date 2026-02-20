export const connection: Connection = {
  CONNECTION_STRING: 'mysql://root:password@localhost:3306',
  DB_NAME: 'music_db',
  DB: 'mysql',
};

export type Connection = {
  CONNECTION_STRING: string;
  DB_NAME: string;
  DB: string;
};
