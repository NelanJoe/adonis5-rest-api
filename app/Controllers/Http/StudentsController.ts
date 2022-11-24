import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Students from 'App/Models/Students'

export default class StudentsController {
    public async index({ response }: HttpContextContract) {
        try {
            const students = await Students.all();

            return response.status(200).json({
                code: 200,
                message: "Get all students",
                data: students
            })
        } catch (err) {
            return response.status(404).json({
                code: 404,
                message: err.message
            })
        }
    }

    public async show({ request, response }: HttpContextContract) {
        try {
            const id = request.param("id");
            const student = await Students.find(id);

            return response.status(200).json({
                code: 200,
                message: "Get student by id",
                data: student
            })
        } catch (err) {
            return response.status(200).json({
                code: 200,
                message: err.message
            })
        }
    }

    public async store({ request, response }: HttpContextContract) {
        const input = request.only(["nama", "email", "jurusan"]);
        try {
            const student = await Students.create(input);
            return response.status(200).json({
                code: 200,
                message: "Succesfully add student",
                data: student
            })
        } catch (err) {
            return response.status(404).json({
                code: 404,
                message: err.message
            })
        }
    }

    public async update({ request, response }: HttpContextContract) {
        const id = request.param("id");
        const student = await Students.find(id);

        try {
            const input = request.only(["nama", "email", "jurusan"]);
            await student?.merge(input).save();

            return response.status(200).json({
                code: 200,
                message: "Successfully update student"
            })
        } catch (err) {
            return response.status(404).json({
                code: 404,
                message: err.message
            })
        }
    }

    public async destroy({ request, response }: HttpContextContract) {
        const id = request.param("id");
        const student = await Students.find(id);
        try {
            await student?.delete()

            return response.status(200).json({
                code: 200,
                massage: "Successfully delete student"
            })

        } catch (err) {
            return response.status(404).json({
                code: 404,
                message: err.message
            })
        }
    }
}
