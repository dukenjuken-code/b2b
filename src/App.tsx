import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ui/ScrollToTop';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import IndustriesPage from './pages/IndustriesPage';
import { LoginPage, RegisterPage, AccountPage, CartPage } from './pages/B2BPages';
import {
  ContactsPage,
  KnowledgePage,
  FAQPage,
  DocsPage,
  PrivacyPage,
  NotFoundPage,
} from './pages/StaticPages';
import BlogPage from './pages/BlogPage';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Main pages with layout */}
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/catalog"
          element={
            <Layout>
              <CatalogPage />
            </Layout>
          }
        />
        <Route
          path="/catalog/:category"
          element={
            <Layout>
              <CategoryPage />
            </Layout>
          }
        />
        <Route
          path="/catalog/:category/:slug"
          element={
            <Layout>
              <ProductPage />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <AboutPage />
            </Layout>
          }
        />
        <Route
          path="/industries"
          element={
            <Layout>
              <IndustriesPage />
            </Layout>
          }
        />
        <Route
          path="/industries/:slug"
          element={
            <Layout>
              <IndustriesPage />
            </Layout>
          }
        />
        <Route
          path="/contacts"
          element={
            <Layout>
              <ContactsPage />
            </Layout>
          }
        />
        <Route
          path="/knowledge"
          element={
            <Layout>
              <KnowledgePage />
            </Layout>
          }
        />
        <Route
          path="/knowledge/:slug"
          element={
            <Layout>
              <KnowledgePage />
            </Layout>
          }
        />
        <Route
          path="/faq"
          element={
            <Layout>
              <FAQPage />
            </Layout>
          }
        />
        <Route
          path="/docs"
          element={
            <Layout>
              <DocsPage />
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout>
              <BlogPage />
            </Layout>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <Layout>
              <BlogPage />
            </Layout>
          }
        />
        <Route
          path="/privacy"
          element={
            <Layout>
              <PrivacyPage />
            </Layout>
          }
        />

        {/* B2B pages — no footer for auth pages */}
        <Route path="/b2b/login" element={<LoginPage />} />
        <Route path="/b2b/register" element={<RegisterPage />} />
        <Route
          path="/b2b/account"
          element={
            <Layout>
              <AccountPage />
            </Layout>
          }
        />
        <Route
          path="/b2b/cart"
          element={
            <Layout>
              <CartPage />
            </Layout>
          }
        />

        {/* 404 */}
        <Route
          path="*"
          element={
            <Layout>
              <NotFoundPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
