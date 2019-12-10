<template>
 <div class="about-metrics">
  <div class="container" id="overview-intro" >
    <div class="row">
      <div class="col-sm">
        <div class="catalogue_intro-section-text">
         <h3>{{ $t("message.methodology.headline") }}</h3>
         <span class="doc-subtitle">{{ $t("message.methodology.sub_headline") }}</span>
        </div>
      </div>
    </div>
   </div>
  <div class="doc-space"></div>
  <div class="doc-space"></div>
  <div class="container toc-accent" id="overview-intro">
    <div class="row">
      <div class="toc-doc">
        <a href="#what-is-quality" class="toc-doc-inactive" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.methodology.what_is_quality.headline") }}</a><br>
        <a href="#scope" class="toc-doc-inactive" id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.methodology.scope.headline") }}</a><br>
        <a href="#cover" class="toc-doc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.methodology.cover.headline") }}</a><br>
        <a href="#process" class="toc-doc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.methodology.process.headline") }} </a><br>
        <a href="#assumptions" class="toc-doc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.methodology.assumptions.headline") }} </a><br>
        <a href="#dimensions" class="toc-doc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.methodology.dimensions.headline") }}</a><br>
        <a href="#scoring" class="toc-doc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">Scoring</a><br>
      </div>
    </div>
  </div>
  <div class="doc-space"></div>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <div class="intro-doc doc-text">
           <span v-html="$t('message.methodology.intro_text')"></span>
        </div>
      </div>
    </div>
   </div>
   <div class="doc-space"></div>
  <p style="position:relative;">
  <a style="position:absolute; top:+30px;" id="what-is-quality"></a></p>
    <div class="container" id="accessibility-intro">
      <div class="row">
      <div class="col-sm-auto">
        <div class="doc-text">
           <h4> {{ $t("message.methodology.what_is_quality.headline") }} </h4>
           <div class="doc-space"></div>
           <p><span v-html="$t('message.methodology.what_is_quality.main_text')"></span></p>
        </div>
      </div>
    </div>
  </div>
  <div class="doc-space"></div>
  <p style="position:relative;">
  <a style="position:absolute; top:+30px;" id="scope"></a></p>
    <div class="container" id="accessibility-intro">
      <div class="row">
      <div class="col-sm-auto">
        <div class="doc-text">
           <h4> {{ $t("message.methodology.scope.headline") }} </h4>
           <span v-html="$t('message.methodology.scope.main_text')"></span>
        </div>
      </div>
    </div>
  </div>
  <div class="doc-space"></div>
  <p style="position:relative;">
  <a style="position:absolute; top:+30px;" id="cover"></a></p>
    <div class="container" id="accessibility-intro">
      <div class="row">
      <div class="col-sm-auto">
        <div class="doc-text">
          <h4> {{ $t("message.methodology.cover.headline") }}</h4>
          <span v-html="$t('message.methodology.cover.main_text')"></span>
        </div>
      </div>
    </div>
  </div>
  <div class="doc-space"></div>
  <p style="position:relative;">
  <a style="position:absolute; top:+30px;" id="process"></a></p>
    <div class="container" id="accessibility-intro">
      <div class="row">
      <div class="col-sm-auto">
        <div class="doc-text">
           <h4> {{ $t("message.methodology.process.headline") }} </h4>
         <span v-html="$t('message.methodology.process.main_text')"></span>
        </div>
      </div>
    </div>
  </div>
  <div class="doc-space"></div>
  <p style="position:relative;">
  <a style="position:absolute; top:+30px;" id="assumptions"></a></p>
    <div class="container" id="accessibility-intro">
      <div class="row">
      <div class="col-sm-auto">
        <div class="doc-text">
          <h4> {{ $t("message.methodology.assumptions.headline") }} </h4>
         <span v-html="$t('message.methodology.assumptions.main_text')"></span>
        </div>
      </div>
    </div>
  </div>
  <div class="doc-space"></div>
  <p style="position:relative;">
  <a style="position:absolute; top:+30px;" id="dimensions"></a></p>
    <div class="container" id="accessibility-intro">
      <div class="row">
      <div class="col-sm-auto">
        <div class="doc-text">
          <h4> {{ $t("message.methodology.dimensions.headline") }} </h4>
          <span v-html="$t('message.methodology.dimensions.main_text')"></span>
          <div class="doc-space"></div>
          <h5>{{ $t("message.methodology.dimensions.findability.headline") }}</h5>
          <span v-html="$t('message.methodology.dimensions.findability.main_text')"></span>
          <div class="doc-space"></div>
          <div class="table-responsive">
          <table class="table table-hover" >
          <!-- <thead v-sticky sticky-side="top" id="sticky"> -->
            <thead v-sticky sticky-side="top" id="sticky-dark">
            <tr class="head-tb">
              <th width="160px">{{ $t("message.methodology.dimensions.table.metric_name") }}</th>
              <th width="260px">{{ $t("message.methodology.dimensions.table.desc") }}</th>
              <th width="370px">{{ $t("message.methodology.dimensions.table.metric") }}</th>
              <th class="weight-row" width="60px">{{ $t("message.methodology.dimensions.table.weight") }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th width="156px">{{ $t("message.methodology.dimensions.findability.keywords_name_1") }}</th>
              <td width="252px">{{ $t("message.methodology.dimensions.findability.keywords_desc_1") }}</td>
              <td><p>{{ $t("message.methodology.dimensions.findability.keywords_metric_1") }}</p>
              <div class="dcat-specs">
                <span class="dcat-specs-top">{{ $t("message.methodology.dimensions.table.dataset") }}</span><br>
                <span class="dcat-specs-key">{{ $t("message.methodology.dimensions.findability.dcat_name_1") }}</span>
              </div>
              </td>
              <td class="weight-row">30</td>
            </tr>
            <tr>
              <th>{{ $t("message.methodology.dimensions.findability.keywords_name_2") }}</th>
              <td>{{ $t("message.methodology.dimensions.findability.keywords_desc_2") }}</td>
              <td><p>{{ $t("message.methodology.dimensions.findability.keywords_metric_2") }}</p>
              <div class="dcat-specs">
                <span class="dcat-specs-top">{{ $t("message.methodology.dimensions.table.dataset") }}</span><br>
                <span class="dcat-specs-key">{{ $t("message.methodology.dimensions.findability.dcat_name_2") }}</span>
              </div>
              </td>
              <td class="weight-row">30</td>
            </tr>
            <tr>
             <th>{{ $t("message.methodology.dimensions.findability.keywords_name_3") }}</th>
              <td>{{ $t("message.methodology.dimensions.findability.keywords_desc_3") }}</td>
              <td><p>{{ $t("message.methodology.dimensions.findability.keywords_metric_3") }}</p>
              <div class="dcat-specs">
                <span class="dcat-specs-top">{{ $t("message.methodology.dimensions.table.dataset") }}</span><br>
                <span class="dcat-specs-key">{{ $t("message.methodology.dimensions.findability.dcat_name_3") }}</span>
              </div>
              </td>
              <td class="weight-row">20</td>
            </tr>
            <tr>
              <th>{{ $t("message.methodology.dimensions.findability.keywords_name_4") }}</th>
              <td>{{ $t("message.methodology.dimensions.findability.keywords_desc_4") }}</td>
              <td><p>{{ $t("message.methodology.dimensions.findability.keywords_metric_4") }}</p>
              <div class="dcat-specs">
                <span class="dcat-specs-top">{{ $t("message.methodology.dimensions.table.dataset") }}</span><br>
                <span class="dcat-specs-key">{{ $t("message.methodology.dimensions.findability.dcat_name_4") }}</span>
              </div>
              </td>
              <td class="weight-row"> 20 </td>
            </tr>
          </tbody>
        </table>
        </div>
          <div class="doc-space"></div>
          <div class="doc-space"></div>
          <h5>{{ $t("message.methodology.dimensions.accessible.headline") }}</h5>
          <span v-html="$t('message.methodology.dimensions.accessible.main_text')"></span>     <div class="doc-space"></div>
          <div class="table-responsive">
          <table class="table table-hover">
          <thead v-sticky sticky-side="top" id="sticky-dark">
            <tr class="head-tb">
              <th width="160px">{{ $t("message.methodology.dimensions.table.metric_name") }}</th>
              <th width="260px">{{ $t("message.methodology.dimensions.table.desc") }}</th>
              <th width="490px">{{ $t("message.methodology.dimensions.table.metric") }}</th>
              <th class="weight-row" width="60px">{{ $t("message.methodology.dimensions.table.weight") }}</th>
            </tr>
          </thead>
          <tbody>
             <tr>
              <th width="148px">{{ $t("message.methodology.dimensions.accessible.keywords_name_1") }}</th>
              <td width="220px">{{ $t("message.methodology.dimensions.accessible.keywords_desc_1") }}</td>
              <td><p>{{ $t("message.methodology.dimensions.accessible.keywords_metric_1") }}</p>
              <div class="dcat-specs">
                <span class="dcat-specs-top">{{ $t("message.methodology.dimensions.table.dataset") }}</span><br>
                <span class="dcat-specs-key">{{ $t("message.methodology.dimensions.accessible.dcat_name_1") }}</span>
              </div>
              </td>
              <td class="weight-row">50</td>
            </tr>
            <tr>
              <th>{{ $t("message.methodology.dimensions.accessible.keywords_name_2") }}</th>
              <td>{{ $t("message.methodology.dimensions.accessible.keywords_desc_2") }}</td>
              <td><p>{{ $t("message.methodology.dimensions.accessible.keywords_metric_2") }}</p>
              <div class="dcat-specs">
                <span class="dcat-specs-top">{{ $t("message.methodology.dimensions.table.dataset") }}</span><br>
                <span class="dcat-specs-key">{{ $t("message.methodology.dimensions.accessible.dcat_name_2") }}</span>
              </div>
              </td>
              <td class="weight-row">20</td>
            </tr>
            <tr>
             <th>{{ $t("message.methodology.dimensions.accessible.keywords_name_3") }}</th>
              <td>{{ $t("message.methodology.dimensions.accessible.keywords_desc_3") }}</td>
              <td><p>{{ $t("message.methodology.dimensions.accessible.keywords_metric_3") }}</p>
              <div class="dcat-specs">
                <span class="dcat-specs-top">{{ $t("message.methodology.dimensions.table.dataset") }}</span><br>
                <span class="dcat-specs-key">{{ $t("message.methodology.dimensions.accessible.dcat_name_3") }}</span>
              </div>
              </td>
              <td class="weight-row">30</td>
            </tr>
          </tbody>
        </table>
        </div>
         <div class="doc-space"></div>
         <div class="doc-space"></div>
         <h5>{{ $t("message.methodology.dimensions.interoperable.headline") }}</h5>
         <span v-html="$t('message.methodology.dimensions.interoperable.main_text')"></span>   <div class="doc-space"></div>
         <div class="table-responsive">
           <table class="table table-hover">
          <thead v-sticky sticky-side="top" id="sticky-dark">
            <tr class="head-tb">
              <th width="148px">{{ $t("message.methodology.dimensions.table.metric_name") }}</th>
              <th width="220px">{{ $t("message.methodology.dimensions.table.desc") }}</th>
              <th width="430px">{{ $t("message.methodology.dimensions.table.metric") }}</th>
              <th class="weight-row" width="60px">{{ $t("message.methodology.dimensions.table.weight") }}</th>
            </tr>
          </thead>
          <tbody>
             <tr>
              <th width="139px">{{ $t("message.methodology.dimensions.interoperable.keywords_name_1") }}</th>
              <td width="220px">{{ $t("message.methodology.dimensions.interoperable.keywords_desc_1") }}</td>
              <td><span v-html="$t('message.methodology.dimensions.interoperable.keywords_metric_1')"></span>
              <div class="dcat-specs">
                <span class="dcat-specs-top">{{ $t("message.methodology.dimensions.table.dataset") }}</span><br>
                <span class="dcat-specs-key">{{ $t("message.methodology.dimensions.interoperable.dcat_name_1") }}</span>
              </div>
              </td>
              <td class="weight-row">20</td>
            </tr>
            <tr>
              <th>{{ $t("message.methodology.dimensions.interoperable.keywords_name_2") }}</th>
              <td>{{ $t("message.methodology.dimensions.interoperable.keywords_desc_2") }}</td>
              <td> <span v-html="$t('message.methodology.dimensions.interoperable.keywords_metric_2')"></span>
              <div class="dcat-specs">
                <span class="dcat-specs-top">{{ $t("message.methodology.dimensions.table.dataset") }}</span><br>
                <span class="dcat-specs-key">{{ $t("message.methodology.dimensions.interoperable.dcat_name_2") }}</span>
              </div>
              </td>
              <td class="weight-row">10</td>
            </tr>
            <tr>
             <th>{{ $t("message.methodology.dimensions.interoperable.keywords_name_3") }}</th>
              <td>{{ $t("message.methodology.dimensions.interoperable.keywords_desc_3") }}</td>
              <td><span v-html="$t('message.methodology.dimensions.interoperable.keywords_metric_3')"></span>
              <div class="dcat-specs">
                <span class="dcat-specs-top">{{ $t("message.methodology.dimensions.table.dataset") }}</span><br>
                <span class="dcat-specs-key">{{ $t("message.methodology.dimensions.interoperable.dcat_name_3") }}</span>
              </div>
              </td>
              <td class="weight-row">10</td>
            </tr>
             <tr>
             <th>{{ $t("message.methodology.dimensions.interoperable.keywords_name_4") }}</th>
              <td>{{ $t("message.methodology.dimensions.interoperable.keywords_desc_4") }}</td>
              <td> <span v-html="$t('message.methodology.dimensions.interoperable.keywords_metric_4')"></span>
              <div class="dcat-specs">
                <span class="dcat-specs-top">{{ $t("message.methodology.dimensions.table.dataset") }}</span><br>
                <span class="dcat-specs-key">{{ $t("message.methodology.dimensions.interoperable.dcat_name_4") }}</span>
              </div>
              </td>
              <td class="weight-row">20</td>
            </tr>
             <tr>
             <th>{{ $t("message.methodology.dimensions.interoperable.keywords_name_5") }}</th>
              <td>{{ $t("message.methodology.dimensions.interoperable.keywords_desc_5") }} </td>
              <td><span v-html="$t('message.methodology.dimensions.interoperable.keywords_metric_5')"></span>
              <div class="dcat-specs">
                <span class="dcat-specs-top">{{ $t("message.methodology.dimensions.table.dataset") }}</span><br>
                <span class="dcat-specs-key">{{ $t("message.methodology.dimensions.interoperable.dcat_name_5") }}</span>
              </div>
              </td>
              <td class="weight-row">20</td>
            </tr>
             <tr>
             <th>{{ $t("message.methodology.dimensions.interoperable.keywords_name_6") }}</th>
              <td> <span v-html="$t('message.methodology.dimensions.interoperable.keywords_metric_6')"></span></td>
              <td> <span v-html="$t('message.methodology.dimensions.interoperable.keywords_metric_6')"></span>
              </td>
              <td class="weight-row">30</td>
            </tr>
          </tbody>
        </table>
        </div>
         <div class="doc-space"></div>
         <div class="doc-space"></div>
        <h5>{{ $t("message.methodology.dimensions.reuse.headline") }}</h5>
         <span v-html="$t('message.methodology.dimensions.reuse.main_text')"></span>   <div class="doc-space"></div>
         <div class="table-responsive">
          <table class="table table-hover">
          <thead v-sticky sticky-side="top" id="sticky-dark">
            <tr class="head-tb">
              <th width="148px">{{ $t("message.methodology.dimensions.table.metric_name") }}</th>
              <th width="260px">{{ $t("message.methodology.dimensions.table.desc") }}</th>
              <th width="360px">{{ $t("message.methodology.dimensions.table.metric") }}</th>
              <th class="weight-row" width="60px">{{ $t("message.methodology.dimensions.table.weight") }}</th>
            </tr>
          </thead>
          <tbody>
             <tr>
              <th width="139px">{{ $t("message.methodology.dimensions.reuse.keywords_name_1") }}</th>
              <td width="258px">{{ $t("message.methodology.dimensions.reuse.keywords_desc_1") }}</td>
              <td ><span v-html="$t('message.methodology.dimensions.reuse.keywords_metric_1')"></span>
              <div class="dcat-specs">
                <span class="dcat-specs-top">{{ $t("message.methodology.dimensions.table.dataset") }}</span><br>
                <span class="dcat-specs-key">{{ $t("message.methodology.dimensions.reuse.dcat_name_1") }}</span>
              </div>
              </td>
              <td class="weight-row">20</td>
            </tr>
            <tr>
              <th>{{ $t("message.methodology.dimensions.reuse.keywords_name_2") }}</th>
              <td>{{ $t("message.methodology.dimensions.reuse.keywords_desc_2") }}</td>
              <td> <span v-html="$t('message.methodology.dimensions.reuse.keywords_metric_2')"></span>
              <div class="dcat-specs">
                <span class="dcat-specs-top">{{ $t("message.methodology.dimensions.table.dataset") }}</span><br>
                <span class="dcat-specs-key">{{ $t("message.methodology.dimensions.reuse.dcat_name_2") }}</span>
              </div>
              </td>
              <td class="weight-row">10</td>
            </tr>
            <tr>
             <th>{{ $t("message.methodology.dimensions.reuse.keywords_name_3") }}</th>
              <td>{{ $t("message.methodology.dimensions.reuse.keywords_desc_3") }}</td>
              <td><span v-html="$t('message.methodology.dimensions.reuse.keywords_metric_3')"></span>
              <div class="dcat-specs">
                <span class="dcat-specs-top">{{ $t("message.methodology.dimensions.table.dataset") }}</span><br>
                <span class="dcat-specs-key">{{ $t("message.methodology.dimensions.reuse.dcat_name_3") }}</span>
              </div>
              </td>
              <td class="weight-row">10</td>
            </tr>
             <tr>
             <th>{{ $t("message.methodology.dimensions.reuse.keywords_name_4") }}</th>
              <td>{{ $t("message.methodology.dimensions.reuse.keywords_desc_4") }}</td>
              <td> <span v-html="$t('message.methodology.dimensions.reuse.keywords_metric_4')"></span>
              <div class="dcat-specs">
                <span class="dcat-specs-top">{{ $t("message.methodology.dimensions.table.dataset") }}</span><br>
                <span class="dcat-specs-key">{{ $t("message.methodology.dimensions.reuse.dcat_name_4") }}</span>
              </div>
              </td>
              <td class="weight-row">5</td>
            </tr>
             <tr>
             <th>{{ $t("message.methodology.dimensions.reuse.keywords_name_5") }}</th>
              <td>{{ $t("message.methodology.dimensions.reuse.keywords_desc_5") }} </td>
              <td><span v-html="$t('message.methodology.dimensions.reuse.keywords_metric_5')"></span>
              <div class="dcat-specs">
                <span class="dcat-specs-top">{{ $t("message.methodology.dimensions.table.dataset") }}</span><br>
                <span class="dcat-specs-key">{{ $t("message.methodology.dimensions.reuse.dcat_name_5") }}</span>
              </div>
              </td>
              <td class="weight-row">20</td>
            </tr>
             <tr>
             <th>{{ $t("message.methodology.dimensions.reuse.keywords_name_6") }}</th>
              <td> <span v-html="$t('message.methodology.dimensions.reuse.keywords_metric_6')"></span></td>
              <td> <span v-html="$t('message.methodology.dimensions.reuse.keywords_metric_6')"></span>
              <div class="dcat-specs">
                <span class="dcat-specs-top">{{ $t("message.methodology.dimensions.table.dataset") }}</span><br>
                <span class="dcat-specs-key">{{ $t("message.methodology.dimensions.reuse.dcat_name_5") }}</span>
              </div>
              </td>
              <td class="weight-row">10</td>
            </tr>
          </tbody>
        </table>
        </div>
        <div class="doc-space"></div>
        <div class="doc-space"></div>
       <h5>{{ $t("message.methodology.dimensions.contextual.headline") }}</h5>
         <span v-html="$t('message.methodology.dimensions.contextual.main_text')"></span>   <div class="doc-space"></div>
         <div class="table-responsive">
          <table class="table table-hover">
          <thead>
            <tr class="head-tb">
              <th width="160px">>{{ $t("message.methodology.dimensions.table.metric_name") }}</th>
              <th width="220px">{{ $t("message.methodology.dimensions.table.desc") }}</th>
              <th width="360px">{{ $t("message.methodology.dimensions.table.metric") }}</th>
              <th class="weight-row" width="60px">{{ $t("message.methodology.dimensions.table.weight") }}</th>
            </tr>
          </thead>
          <tbody>
             <tr>
              <th>{{ $t("message.methodology.dimensions.contextual.keywords_name_1") }}</th>
              <td width="260px">{{ $t("message.methodology.dimensions.contextual.keywords_desc_1") }}</td>
              <td width="260px"><span v-html="$t('message.methodology.dimensions.contextual.keywords_metric_1')"></span>
              <div class="dcat-specs">
                <span class="dcat-specs-top">{{ $t("message.methodology.dimensions.table.dataset") }}</span><br>
                <span class="dcat-specs-key">{{ $t("message.methodology.dimensions.contextual.dcat_name_1") }}</span>
              </div>
              </td>
              <td class="weight-row">5</td>
            </tr>
            <tr>
              <th>{{ $t("message.methodology.dimensions.contextual.keywords_name_2") }}</th>
              <td>{{ $t("message.methodology.dimensions.contextual.keywords_desc_2") }}</td>
              <td> <span v-html="$t('message.methodology.dimensions.contextual.keywords_metric_2')"></span>
              <div class="dcat-specs">
                <span class="dcat-specs-top">{{ $t("message.methodology.dimensions.table.dataset") }}</span><br>
                <span class="dcat-specs-key">{{ $t("message.methodology.dimensions.contextual.dcat_name_2") }}</span>
              </div>
              </td>
              <td class="weight-row">5</td>
            </tr>
            <tr>
             <th>{{ $t("message.methodology.dimensions.contextual.keywords_name_3") }}</th>
              <td>{{ $t("message.methodology.dimensions.contextual.keywords_desc_3") }}</td>
              <td><span v-html="$t('message.methodology.dimensions.contextual.keywords_metric_3')"></span>
              <div class="dcat-specs">
                <span class="dcat-specs-top">{{ $t("message.methodology.dimensions.table.dataset_and_distribution") }}</span><br>
                <span class="dcat-specs-key">{{ $t("message.methodology.dimensions.contextual.dcat_name_3") }}</span>
              </div>
              </td>
              <td class="weight-row">5</td>
            </tr>
             <tr>
             <th>{{ $t("message.methodology.dimensions.contextual.keywords_name_4") }}</th>
              <td>{{ $t("message.methodology.dimensions.contextual.keywords_desc_4") }}</td>
              <td> <span v-html="$t('message.methodology.dimensions.contextual.keywords_metric_4')"></span>
              <div class="dcat-specs">
                <span class="dcat-specs-top">{{ $t("message.methodology.dimensions.table.dataset") }}</span><br>
                <span class="dcat-specs-key">{{ $t("message.methodology.dimensions.contextual.dcat_name_4") }}</span>
              </div>
              </td>
              <td class="weight-row">5</td>
            </tr>
          </tbody>
        </table>
        </div>
       </div>
      </div>
    </div>
  </div>
  <div class="doc-space"></div>
  <p style="position:relative;">
  <a style="position:absolute; top:+30px;" id="scoring"></a></p>
    <div class="container" id="accessibility-intro">
      <div class="row">
      <div class="col-sm-auto">
        <div class="doc-text">
        <h4>{{ $t("message.methodology.scoring.headline") }}</h4>
         <span v-html="$t('message.methodology.scoring.main_text')"></span>   <div class="doc-space"></div><div class="doc-space"></div>
         <div class="table-responsive">
          <table class="table md-tb" width="450px">
          <thead>
            <tr class="head-tb">
              <th width="260px">{{ $t("message.methodology.scoring.table.dimension") }}</th>
              <th>{{ $t("message.methodology.scoring.table.max_points") }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{{ $t("message.methodology.dimensions.findability.headline") }}</th>
              <td>100</td>
            </tr>
            <tr>
              <th>{{ $t("message.methodology.dimensions.accessible.headline") }}</th>
              <td>100</td>
            </tr>
            <tr>
              <th>{{ $t("message.methodology.dimensions.interoperable.headline") }}</th>
              <td>110</td>
            </tr>
             <tr>
              <th>{{ $t("message.methodology.dimensions.reuse.headline") }}</th>
              <td>75 </td>
            </tr>
             <tr>
              <th>{{ $t("message.methodology.dimensions.contextual.headline") }}</th>
              <td>20 </td>
            </tr>
             <tr class="sum">
              <th>Sum</th>
              <td><strong>405</strong></td>
            </tr>
          </tbody>
        </table>
        </div>
         <div class="doc-space"></div>
       <span v-html="$t('message.methodology.scoring.text')"></span>
       <div class="doc-space"></div>
       <div class="table-responsive">
       <table class="table sm-tb">
          <thead>
            <tr class="head-tb">
              <th scope="col" width="160px">{{ $t("message.methodology.scoring.table.scoring_cat") }}</th>
              <th scope="col">{{ $t("message.methodology.scoring.table.range") }}</th>
            </tr>
          </thead>
          <tbody>
            <tr style="backgroundcolor: #000;">
              <th>{{ $t("message.methodology.scoring.table.excellent") }}</th>
              <td>> 350</td>
            </tr>
            <tr>
              <th>{{ $t("message.methodology.scoring.table.good") }}</th>
              <td>221 – 350</td>
            </tr>
            <tr>
              <th>{{ $t("message.methodology.scoring.table.just_enough") }}</th>
              <td>120 – 220 </td>
            </tr>
             <tr>
              <th>{{ $t("message.methodology.scoring.table.bad") }}</th>
              <td>220 </td>
            </tr>
          </tbody>
        </table>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import VueEvents from 'vue-events'
import Vue from 'vue'
import Sticky from 'vue-sticky-directive'

Vue.use(VueEvents)

export default {
  components: {
  },
  data () {
    return {
    }
  },
  directives: {
    Sticky
  },
  mounted () {
  },
  methods: {
  },
  computed: {
  }
}
</script>
