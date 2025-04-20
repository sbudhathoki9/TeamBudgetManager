import { Request, Response } from 'express';
import pool from '../utils/db';

export const createPlayer = async (req: Request, res: Response) => {
  try {
    const { name, position, jersey_number } = req.body;
    const photo_url = `/uploads/${req.file!.filename}`;

    const result = await pool.query(
      'INSERT INTO players (name, position, jersey_number, photo_url) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, position, jersey_number, photo_url]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error });
  }
};
