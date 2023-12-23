import { Expose } from 'class-transformer';

export class UserRDO {

  @Expose()
  public id: string;

  @Expose()
  public email: string;

  @Expose()
  public firstName: string;

  @Expose()
  public lastName: string;

  @Expose()
  public avatar: string;

  @Expose()
  public followers: number;

  @Expose()
  public posts: number;

}
