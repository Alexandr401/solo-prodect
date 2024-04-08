const router = require('express').Router();
const Catalogs = require('../../components/pages/Catalog');
const { Catalog, User, Basket } = require('../../db/models');

router.route('/catalog').get(async (req, res, next) => {
  try {
    // Получаем все каталоги, кроме скрытых
    const catalogs = await Catalog.findAll({
      where: {
        hide: 'N'
      },
      raw: true
    });
    const userId = req.session.userId;
    const user = await User.findByPk(userId);
    if (user) {
    const baskets = await Basket.findAll({
        where: { userId: userId },
        include: [Catalog]
      });
        
    const basketCatalog = baskets.map(basket => basket.Catalog);

    return res.send(res.renderComponent(Catalogs, { catalogs, user, basketCatalog }));
    } else{
      return res.send(res.renderComponent(Catalogs, { catalogs, user }));
    }
  } catch (error) {
    next(error);
  }
});

// Функция для получения каталогов по категории
async function catalogsFilters(category) {
  return await Catalog.findAll({
    where: {
      category: category,
      hide: 'N'
    },
    raw: true
  });
}

router.route('/catalog/krovati').get(async (req, res, next) => {
  try {
    const catalogs = await catalogsFilters('Кровать');
    const userId = req.session.userId;
    const user = await User.findByPk(userId);

    if (user) {
      const baskets = await Basket.findAll({
          where: { userId: userId },
          include: [Catalog]
        });
          
      const basketCatalog = baskets.map(basket => basket.Catalog);
  
      return res.send(res.renderComponent(Catalogs, { catalogs, user, basketCatalog }));
      } else{
        return res.send(res.renderComponent(Catalogs, { catalogs, user }));
      }
  } catch (error) {
    next(error);
  }
});

router.route('/catalog/divani').get(async (req, res, next) => {
    try {
      const catalogs = await catalogsFilters('Диван');
      
      const userId = req.session.userId;
      const user = await User.findByPk(userId);
  
      if (user) {
        const baskets = await Basket.findAll({
            where: { userId: userId },
            include: [Catalog]
          });
            
        const basketCatalog = baskets.map(basket => basket.Catalog);
    
        return res.send(res.renderComponent(Catalogs, { catalogs, user, basketCatalog }));
        } else{
          return res.send(res.renderComponent(Catalogs, { catalogs, user }));
        }
    } catch (error) {
      next(error);
    }
});

router.route('/catalog/wkafi').get(async (req, res, next) => {
    try {
      const catalogs = await catalogsFilters('Шкаф');
      const userId = req.session.userId;
      const user = await User.findByPk(userId);
  
      if (user) {
        const baskets = await Basket.findAll({
            where: { userId: userId },
            include: [Catalog]
          });
            
        const basketCatalog = baskets.map(basket => basket.Catalog);
    
        return res.send(res.renderComponent(Catalogs, { catalogs, user, basketCatalog }));
        } else{
          return res.send(res.renderComponent(Catalogs, { catalogs, user }));
        }
    } catch (error) {
      next(error);
    }
});

router.route('/catalog/tymbi').get(async (req, res, next) => {
    try {
      const catalogs = await catalogsFilters('Тумба');
      const userId = req.session.userId;
      const user = await User.findByPk(userId);
  
      if (user) {
        const baskets = await Basket.findAll({
            where: { userId: userId },
            include: [Catalog]
          });
            
        const basketCatalog = baskets.map(basket => basket.Catalog);
    
        return res.send(res.renderComponent(Catalogs, { catalogs, user, basketCatalog }));
        } else{
          return res.send(res.renderComponent(Catalogs, { catalogs, user }));
        }
    } catch (error) {
      next(error);
    }
});

router.route('/catalog/stoli').get(async (req, res, next) => {
    try {
      const catalogs = await catalogsFilters('Стол');
      const userId = req.session.userId;
      const user = await User.findByPk(userId);
  
      if (user) {
        const baskets = await Basket.findAll({
            where: { userId: userId },
            include: [Catalog]
          });
            
        const basketCatalog = baskets.map(basket => basket.Catalog);
    
        return res.send(res.renderComponent(Catalogs, { catalogs, user, basketCatalog }));
        } else{
          return res.send(res.renderComponent(Catalogs, { catalogs, user }));
        }
    } catch (error) {
      next(error);
    }
});

router.route('/catalog/styliya').get(async (req, res, next) => {
    try {
      const catalogs = await catalogsFilters('Стул');
      const userId = req.session.userId;
      const user = await User.findByPk(userId);
  
      if (user) {
        const baskets = await Basket.findAll({
            where: { userId: userId },
            include: [Catalog]
          });
            
        const basketCatalog = baskets.map(basket => basket.Catalog);
    
        return res.send(res.renderComponent(Catalogs, { catalogs, user, basketCatalog }));
        } else{
          return res.send(res.renderComponent(Catalogs, { catalogs, user }));
        }
    } catch (error) {
      next(error);
    }
});

router.route('/catalog/kresla').get(async (req, res, next) => {
    try {
      const catalogs = await catalogsFilters('Кресло');
      const userId = req.session.userId;
      const user = await User.findByPk(userId);
  
      if (user) {
        const baskets = await Basket.findAll({
            where: { userId: userId },
            include: [Catalog]
          });
            
        const basketCatalog = baskets.map(basket => basket.Catalog);
    
        return res.send(res.renderComponent(Catalogs, { catalogs, user, basketCatalog }));
        } else{
          return res.send(res.renderComponent(Catalogs, { catalogs, user }));
        }
    } catch (error) {
      next(error);
    }
});

module.exports = router;

