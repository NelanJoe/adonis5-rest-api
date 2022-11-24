import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Student from 'App/Models/Students'

export default class extends BaseSeeder {
  public async run() {
    await Student.createMany([
      {
        nama: "Budi",
        email: "budi@gmail.com",
        jurusan: "Teknik Informatika"
      },
      {
        nama: "Susan",
        email: "susan@gmail.com",
        jurusan: "Bisnis Digital"
      },
      {
        nama: "Riska",
        email: "riska@gmail.com",
        jurusan: "Sistem Informasi"
      },
    ])
  }
}
