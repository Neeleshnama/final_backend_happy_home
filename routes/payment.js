/**
 * @swagger
 * tags:
 *   name: Stripe
 *   description: API endpoints for processing payments with Stripe
 */

/**
 * @swagger
 * /payment/process:
 *   post:
 *     summary: Process payment with Stripe
 *     tags: [Stripe]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *                 description: The amount to be charged (in INR)
 *             example:
 *               amount: 1000
 *     responses:
 *       '200':
 *         description: Payment processed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the payment was successful
 *                 client_secret:
 *                   type: string
 *                   description: The client secret generated by Stripe
 *               example:
 *                 success: true
 *                 client_secret: stripe-client-secret
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /payment/stripeapikey:
 *   get:
 *     summary: Get Stripe API key
 *     tags: [Stripe]
 *     responses:
 *       '200':
 *         description: Stripe API key retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 stripeApikey:
 *                   type: string
 *                   description: The Stripe API key
 *               example:
 *                 stripeApikey: stripe-api-key
 *       '500':
 *         description: Internal server error
 */
