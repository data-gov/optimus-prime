import { Router } from 'express';
import { getGraphqlConfig, getGraphiqlConfig } from '../../config/graphql';

const router = Router();

router.use('/graphiql', getGraphiqlConfig());
router.use('/graphql', getGraphqlConfig());

export const graphqlRouter = router;
