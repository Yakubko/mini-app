import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from 'typings/SequelizeAttributes';
import * as bcrypt from 'bcryptjs';

export interface UserAttributes {
    id?: number;
    username: string;
    password: string;
    full_name: string;
}

export interface UserInstance extends Sequelize.Instance<UserAttributes>, UserAttributes {}

export const UserFactory = (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): Sequelize.Model<UserInstance, UserAttributes> => {
    const attributes: SequelizeAttributes<UserAttributes> = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                name: '',
                msg: 'Looks like you already have an account with this username',
            },
            validate: {
                notEmpty: { msg: 'Required' },
                is: {
                    args: ['^[a-z]+$', 'i'],
                    msg: 'Only letters allowed',
                },
                len: {
                    args: [4, 32],
                    msg: 'String length is not in range 4-32',
                },
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Required' },
                len: [1, 60],
            },
            set(value) {
                this.setDataValue('password', value ? bcrypt.hashSync(value) : null);
            },
        },
        full_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Required' },
                len: {
                    args: [4, 32],
                    msg: 'String length is not in range 4-32',
                },
            },
        },
    };

    const User = sequelize.define<UserInstance, UserAttributes>('User', attributes, { tableName: 'system_user' });

    return User;
};
