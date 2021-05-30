declare module 'use-shopping-cart' {
  interface CommonProviderProps {
    children: JSX.Element
    /**
     * Your Publishable Stripe API key
     */
    stripe: string
    /**
     * The preferred currency used to format price data
     */
    currency: string
    /**
     * The language to be used format price data
     */
    language?: string
  }
  interface ClientOnlyProviderProps extends CommonProviderProps {
    /**
     * Determines Stripe mode. Options are subscription or payment
     */
    mode: 'payment'
    /**
     * Determines cart mode. Options are client-only or checkout-session
     */
    cartMode: 'client-only'
    /**
     * The redirect url for a successful sale
     */
    successUrl: string
    /**
     * The redirect url for a cancelled sale
     */
    cancelUrl: string
    /**
     * Should the billing address be collected at the checkout. Defaults to false
     */
    billingAddressCollection?: boolean
    /**
     * The allowed countries
     */
    allowedCountries?: null | string[]
  }
  interface CheckoutSessionProviderProps extends CommonProviderProps {
    /**
     * Determines checkout mode
     */
    mode: 'checkout-session'
  }
}
