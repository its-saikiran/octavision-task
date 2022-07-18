const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const router = require('express').Router();

router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

router.post('/create', async(req, res) => {
  try {
    const data = await prisma.user.create({
      data: req.body
    })
    res.send(data)
  } catch (error) {
    res.send(error)
  }
})


router.get('/all', async(req, res) => {
  try {
    const data = await prisma.user.findMany()
    res.send(data)
  } catch (error) {
    res.send(error)
  }
})


router.delete('/delete/:id', async(req, res) => {
  const id = parseInt(req.params.id)
  try {
    await prisma.user.delete({
      where: { id }
    })
    res.send('deleted successfully.')
  } catch (error) {
    res.send(error)
  }
})


module.exports = router;
