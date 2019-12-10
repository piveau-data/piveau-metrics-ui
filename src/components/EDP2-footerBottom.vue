<template>
  <div class="edp2-footer-bottom container-fluid">
    <div class="row">
      <div class="col-md-12 col-lg-6">
        <ul>
          <li>{{ $t('message.footer.lastUpdate') }}: 01/04/2019</li>
        </ul>
      </div>
      <div class="col-md-12 col-lg-6">
        <ul class="menu clearfix list-group list-group-flush list-unstyled">
          <li class="leaf nav-item small mx-0">
            <a :href="`${rootURL}${$i18n.locale}/newsletter/subscribe`" class="nav-link p-0">{{ $t('message.footer.links.newsletter') }}</a>
          </li>
          <li class="leaf nav-item small mx-0">
            <a :href="`${rootURL}${$i18n.locale}/faq`" class="nav-link p-0">{{ $t('message.footer.links.faq') }}</a>
          </li>
          <li class="leaf nav-item small mx-0">
            <a :href="`${rootURL}${$i18n.locale}/search/site`" class="nav-link p-0">{{ $t('message.footer.links.search') }}</a>
          </li>
          <li class="leaf nav-item small mx-0">
            <a :href="`${rootURL}${$i18n.locale}/feedback/form`" class="nav-link p-0">{{ $t('message.footer.links.contact') }}</a>
          </li>
          <li class="leaf nav-item small mx-0">
            <a :href="`${rootURL}${$i18n.locale}/cookies`" class="nav-link p-0">{{ $t('message.footer.links.cookies') }}</a>
          </li>
          <li class="leaf nav-item small mx-0">
            <a :href="`${rootURL}${$i18n.locale}/legal-notice`" class="nav-link p-0">{{ $t('message.footer.links.legalNotice') }}</a>
          </li>
          <li class="last leaf nav-item small mx-0">
            <!--<a :href="`${rootURL}sparql-manager/${$i18n.locale}/user`" class="nav-link p-0">{{ $t('message.footer.links.login') }}</a>-->
            <div title="Coming soon">{{ $t('message.header.subnav.login') }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

  export default {
    name: 'EDP2-footerBottom',
    data() {
      return {
        rootURL: 'https://www.europeandataportal.eu/',
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import '../../node_modules/bootstrap/scss/bootstrap.scss';

  // FOOTER BOTTOM
  .edp2-footer-bottom {
    font-family: "Open Sans",Helvetica,Arial,sans-serif;
    background-color: #015196;

    * {
      color: #99B1CB;
    }
    .row > div {
      padding-top: 5px;
      padding-bottom: 0;

      &:nth-of-type(2) ul {
        text-align: right;
      }
    }
    ul {
      padding: 5px 0 0 0;
      margin-bottom: 10px;

      &.menu {
        display: block;
        border: medium none;
        list-style: outside none none;
      }

      & ol {
        margin-top: 0;
      }
      li:after {
        content: " |";
      }
      li:last-of-type:after {
        content: "";
      }
      li {
        display: inline-block;
        font-size: 12px;
        margin-left: 5px;

        a {
          background: none;
          border: 0;
          padding: 0;
          display: inline-block;
        }

        &.leaf {
          padding: 0;
          list-style-type: square;
        }
      }
    }
  }

  // MEDIA QUERIES
  @media (max-width: 992px) {
    .edp2-footer-bottom, .edp2-footer-bottom .menu {
      text-align: center !important;
    }
  }
</style>
