import express from 'express'
import Contact from '../models/Contact.js'

const router = express.Router()

// Get all contact messages (for admin)
router.get('/', async (req, res) => {
    try {
        const messages = await Contact.find().sort({ createdAt: -1 })
        res.json(messages)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Submit contact form
router.post('/', async (req, res) => {
    const contact = new Contact(req.body)

    try {
        const newContact = await contact.save()
        res.status(201).json({
            message: 'Message sent successfully!',
            data: newContact
        })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Update message status (for admin)
router.patch('/:id/status', async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            { status: req.body.status },
            { new: true }
        )
        if (!contact) {
            return res.status(404).json({ message: 'Message not found' })
        }
        res.json(contact)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

export default router
